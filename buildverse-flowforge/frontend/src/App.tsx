import { useState, useCallback } from 'react';
import type { Node, Edge } from 'reactflow';

import FlowCanvas from './components/FlowCanvas';
import XMLInputPanel from './components/XMLInputPanel';
import { parseXml } from './services/apiService';
import { getLayoutedElements } from './utils/layoutUtils';
import type { FlowNodeData } from './types/flow';

export default function App() {
  const [nodes, setNodes] = useState<Node<FlowNodeData>[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ─── Send XML → backend → receive graph → layout → render ──
  const handleGenerate = useCallback(async (xml: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await parseXml(xml);

      // Apply dagre auto-layout (top-to-bottom)
      const { nodes: laid, edges: laidEdges } = getLayoutedElements(
        result.nodes,
        result.edges,
        'TB'
      );

      setNodes(laid);
      setEdges(laidEdges);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Failed to parse XML. Check the backend is running.';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col bg-[#060a14] overflow-hidden">
      {/* ── Header ──────────────────────────────────────────── */}
      <header className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-white/[0.06] bg-[#0a0e1a]/80 backdrop-blur-xl z-40">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
          </div>
          <div className="leading-none">
            <h1 className="text-base font-bold text-white tracking-tight">
              FlowForge
              <span className="text-slate-500 font-normal text-sm ml-1.5">— XML Process Visualizer</span>
            </h1>
          </div>
        </div>

        {/* Right side — BuildVerse branding */}
        <a
          href="https://buildverse.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-medium"
        >
          buildverse.studio
        </a>
      </header>

      {/* ── Main area — 30 / 70 split ──────────────────────── */}
      <div className="flex flex-1 min-h-0">
        {/* Left — XML Input Panel (30%) */}
        <div className="w-[30%] min-w-[320px] max-w-[480px] shrink-0">
          <XMLInputPanel
            onGenerate={handleGenerate}
            loading={loading}
            error={error}
          />
        </div>

        {/* Right — Flow Canvas (70%) */}
        <FlowCanvas nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}
