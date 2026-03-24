/**
 * Streams from R2 (bucket buildverse-videos, binding buildverse_videos).
 * Object key must match the filename in the bucket exactly.
 */
const OBJECT_KEY = 'Voice Agent in Action_ Booking a Site Visit!.mp4'

export async function onRequest(context) {
  const { request, env } = context

  const fullObject = await env.buildverse_videos.get(OBJECT_KEY)
  if (!fullObject) {
    return new Response('Video not found', { status: 404 })
  }

  const totalSize = fullObject.size

  const range = request.headers.get('Range')
  let object = fullObject
  let status = 200

  if (range) {
    const [start, end] = range.replace(/bytes=/, '').split('-').map(Number)
    const startPos = start || 0
    const endPos = end || totalSize - 1
    const contentLength = endPos - startPos + 1

    object = await env.buildverse_videos.get(OBJECT_KEY, {
      range: { offset: startPos, length: contentLength },
    })

    if (!object) {
      return new Response('Range not satisfiable', { status: 416 })
    }

    status = 206
  }

  const headers = new Headers()
  object.writeHttpMetadata(headers)
  headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  headers.set('Access-Control-Allow-Origin', '*')
  headers.set('Content-Type', 'video/mp4')
  headers.set('Accept-Ranges', 'bytes')

  if (range) {
    const [start, end] = range.replace(/bytes=/, '').split('-').map(Number)
    const startPos = start || 0
    const endPos = end || totalSize - 1
    const contentLength = endPos - startPos + 1

    headers.set('Content-Range', `bytes ${startPos}-${endPos}/${totalSize}`)
    headers.set('Content-Length', contentLength.toString())
  } else {
    headers.set('Content-Length', totalSize.toString())
  }

  return new Response(object.body, { status, headers })
}
