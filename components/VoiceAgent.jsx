import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMic, FiMicOff, FiX, FiVolume2 } from 'react-icons/fi'

const VoiceAgent = () => {
  const agent = {
    name: 'Nova',
    title: 'AI Scheduling Assistant',
    greeting:
      "Hi! I'm Nova. I can book a time that works for you. Would you like a 15‑minute or 30‑minute call?",
    avatarEmoji: '🪄',
  }
  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [conversation, setConversation] = useState([])
  const [error, setError] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  
  const recognitionRef = useRef(null)
  const synthesisRef = useRef(null)
  const conversationEndRef = useRef(null)
  const conversationRef = useRef([])

  // Load conversation from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedConversation = localStorage.getItem('nova-conversation')
      if (savedConversation) {
        try {
          const parsed = JSON.parse(savedConversation)
          // Only restore if conversation is recent (within 1 hour)
          if (parsed.length > 0) {
            const lastMessageTime = new Date(parsed[parsed.length - 1].timestamp)
            const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
            if (lastMessageTime > oneHourAgo) {
              setConversation(parsed)
              conversationRef.current = parsed
            }
          }
        } catch (err) {
          console.error('Error loading conversation from localStorage:', err)
        }
      }
    }
  }, [])

  // Save conversation to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && conversation.length > 0) {
      localStorage.setItem('nova-conversation', JSON.stringify(conversation))
    }
  }, [conversation])

  const speakText = useCallback((text) => {
    if (synthesisRef.current) {
      synthesisRef.current.cancel() // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.95
      utterance.pitch = 1
      utterance.volume = 0.9

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)

      synthesisRef.current.speak(utterance)
    }
  }, [])

  const handleUserMessage = useCallback(async (text) => {
    // Add user message to conversation
    const userMessage = { role: 'user', text, timestamp: new Date() }
    const currentConversation = [...conversationRef.current, userMessage]
    conversationRef.current = currentConversation
    setConversation(currentConversation)

    try {
      setIsProcessing(true)
      setError(null)

      // Call n8n webhook
      const response = await fetch('/api/voice-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          conversationHistory: conversationRef.current.slice(0, -1).map((msg) => ({
            role: msg.role,
            text: msg.text,
          })),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `API error: ${response.statusText}`)
      }

      const data = await response.json()
      
      // Handle demo/setup required responses
      if (data.setupRequired || data.demo) {
        console.warn('n8n webhook not configured:', data)
      }

      const botMessage = {
        role: 'assistant',
        text: data.response || data.message || 'I apologize, but I could not process your request.',
        timestamp: new Date(),
      }

      conversationRef.current = [...conversationRef.current, botMessage]
      setConversation(conversationRef.current)

      // Speak the response
      speakText(botMessage.text)
    } catch (err) {
      console.error('Error calling n8n webhook:', err)
      const errorMessage = {
        role: 'assistant',
        text: err.message.includes('timeout') 
          ? 'Sorry, that took too long. Please try again.' 
          : err.message.includes('connect') 
          ? 'I\'m having trouble connecting. Please check your connection or try again later.'
          : 'Sorry, I encountered an error. Please try again or use the contact form.',
        timestamp: new Date(),
      }
      conversationRef.current = [...conversationRef.current, errorMessage]
      setConversation(conversationRef.current)
      speakText(errorMessage.text)
      setError(err.message)
    } finally {
      setIsProcessing(false)
    }
  }, [speakText])

  // Initialize Web Speech API
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Speech Recognition (STT)
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = 'en-US'

        recognitionRef.current.onstart = () => {
          setIsListening(true)
          setError(null)
        }

        recognitionRef.current.onresult = async (event) => {
          const transcript = event.results[0][0].transcript
          await handleUserMessage(transcript)
        }

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error)
          setIsListening(false)
          
          // Handle specific error types with user-friendly messages
          let errorMessage = 'Sorry, I encountered an error.'
          switch (event.error) {
            case 'not-allowed':
              errorMessage = 'Microphone permission denied. Please allow microphone access in your browser settings.'
              break
            case 'no-speech':
              errorMessage = 'I didn\'t hear anything. Please try speaking again.'
              break
            case 'audio-capture':
              errorMessage = 'No microphone found. Please check your microphone connection.'
              break
            case 'network':
              errorMessage = 'Network error occurred. Please check your connection.'
              break
            case 'service-not-allowed':
              errorMessage = 'Speech recognition service is not allowed. Please check your browser settings.'
              break
            default:
              errorMessage = `Recognition error: ${event.error}. Please try again.`
          }
          setError(errorMessage)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }
      } else {
        setError('Speech recognition not supported in this browser')
      }

      // Speech Synthesis (TTS)
      if ('speechSynthesis' in window) {
        synthesisRef.current = window.speechSynthesis
      }
    }
  }, [handleUserMessage])

  // Sync conversationRef with conversation state
  useEffect(() => {
    conversationRef.current = conversation
  }, [conversation])

  // Scroll conversation to bottom
  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [conversation])

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start()
      } catch (err) {
        console.error('Error starting recognition:', err)
        if (err.message?.includes('already started')) {
          // Recognition already running, ignore
          return
        }
        setError('Could not start listening. Please check microphone permissions or try refreshing the page.')
      }
    }
  }

  // Auto-greet when widget opens for the first time (only if no conversation exists)
  useEffect(() => {
    if (isOpen && conversation.length === 0 && !isProcessing) {
      const greetTimer = setTimeout(() => {
        if (!hasGreeted) {
          speakText(agent.greeting)
          setHasGreeted(true)
        }
      }, 500) // Small delay for smooth opening animation

      return () => clearTimeout(greetTimer)
    }
  }, [isOpen, hasGreeted, conversation.length, isProcessing, speakText, agent.greeting])

  // Reset hasGreeted when conversation is cleared
  useEffect(() => {
    if (conversation.length === 0) {
      setHasGreeted(false)
    }
  }, [conversation.length])

  // Clear conversation function
  const clearConversation = () => {
    setConversation([])
    conversationRef.current = []
    if (typeof window !== 'undefined') {
      localStorage.removeItem('nova-conversation')
    }
    setHasGreeted(false)
    setError(null)
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
    }
  }

  const toggleWidget = () => {
    const wasOpen = isOpen
    setIsOpen(!isOpen)
    if (wasOpen) {
      // Closing widget
      stopListening()
      if (synthesisRef.current) {
        synthesisRef.current.cancel()
        setIsSpeaking(false)
      }
    } else {
      // Opening widget - clear errors
      setError(null)
    }
  }

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleWidget}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300"
        aria-label="Open voice assistant"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiMic className="w-6 h-6" />
          </motion.div>
        )}
      </motion.button>

      {/* Voice Agent Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-200 dark:border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-blue to-primary-purple p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                    <span aria-hidden>{agent.avatarEmoji}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{agent.name}</h3>
                    <p className="text-white/80 text-xs">{agent.title}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {conversation.length > 0 && (
                    <button
                      onClick={clearConversation}
                      className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                      aria-label="Clear conversation"
                      title="Clear conversation"
                    >
                      Clear
                    </button>
                  )}
                  <div className="flex items-center space-x-3">
                  {isSpeaking && (
                    <div className="flex items-end space-x-1 h-4" aria-label="Speaking">
                      <motion.span className="w-1 bg-white/80" animate={{ height: [4, 14, 6, 12, 4] }} transition={{ repeat: Infinity, duration: 1.2 }} />
                      <motion.span className="w-1 bg-white/80" animate={{ height: [10, 6, 14, 6, 10] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }} />
                      <motion.span className="w-1 bg-white/80" animate={{ height: [6, 12, 4, 14, 6] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} />
                    </div>
                  )}
                  {isListening && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-3 h-3 bg-red-400 rounded-full"
                    />
                  )}
                  </div>
                </div>
              </div>
              {/* Quick Intents */}
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Book a 15‑minute call',
                  'Book a 30‑minute call',
                  'Check availability this week',
                  'Reschedule my meeting',
                ].map((intent) => (
                  <button
                    key={intent}
                    onClick={() => handleUserMessage(intent)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/15 text-white hover:bg-white/25 border border-white/20 transition-colors"
                  >
                    {intent}
                  </button>
                ))}
              </div>
            </div>

            {/* Conversation Area */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900">
              {conversation.length === 0 && !isProcessing ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center text-slate-500 dark:text-gray-400"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-14 h-14 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-2xl mb-3"
                  >
                    <span aria-hidden>{agent.avatarEmoji}</span>
                  </motion.div>
                  <p className="text-sm text-slate-700 dark:text-gray-200 max-w-xs">{agent.greeting}</p>
                  {!hasGreeted && (
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-2">Click the microphone to start</p>
                  )}
                </motion.div>
              ) : (
                conversation.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.role === 'user'
                          ? 'bg-primary-blue text-white'
                          : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-gray-100'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {msg.role === 'assistant' && (
                          <div className="w-6 h-6 mt-0.5 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-xs shrink-0">
                            <span aria-hidden>{agent.avatarEmoji}</span>
                          </div>
                        )}
                        <p className="text-sm">{msg.text}</p>
                      </div>
                      <p className="text-xs mt-1 opacity-70">
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))
              )}
              {/* Typing Indicator */}
              <AnimatePresence>
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[80%] rounded-lg p-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-gray-100">
                      <div className="flex items-center space-x-1">
                        <motion.span className="w-2 h-2 rounded-full bg-slate-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} />
                        <motion.span className="w-2 h-2 rounded-full bg-slate-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} />
                        <motion.span className="w-2 h-2 rounded-full bg-slate-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={conversationEndRef} />
            </div>

              {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 py-2 bg-red-50 dark:bg-red-900/20 border-t border-red-200 dark:border-red-800 overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs text-red-600 dark:text-red-400 flex-1">{error}</p>
                    <button
                      onClick={() => setError(null)}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-xs font-semibold shrink-0"
                      aria-label="Dismiss error"
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Controls */}
            <div className="p-4 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={isListening ? stopListening : startListening}
                  disabled={isSpeaking}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    isListening
                      ? 'bg-red-500 text-white'
                      : 'bg-primary-blue text-white hover:bg-blue-600'
                  } ${isSpeaking ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label={isListening ? 'Stop listening' : 'Start listening'}
                >
                  {isListening ? (
                    <FiMicOff className="w-6 h-6" />
                  ) : (
                    <FiMic className="w-6 h-6" />
                  )}
                </motion.button>

                {isSpeaking && (
                  <div className="flex items-center space-x-2 text-slate-600 dark:text-gray-400">
                    <FiVolume2 className="w-4 h-4" />
                    <span className="text-xs">Speaking...</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-center text-slate-500 dark:text-gray-400 mt-3">
                {isListening
                  ? 'Listening... Speak now'
                  : isSpeaking
                  ? 'Assistant is speaking...'
                  : 'Click the microphone to speak'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VoiceAgent

