import { useRef, useEffect, useCallback } from 'react';
import ReactFlow, {
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  ReactFlowProvider,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import type { Node, Edge } from 'reactflow';

import { nodeTypes } from './NodeTypes';
import { downloadPng } from '../utils/exportUtils';
import type { FlowNodeData } from '../types/flow';

// ─── Props ─────────────────────────────────────────────────────
interface FlowCanvasProps {
  nodes: Node<FlowNodeData>[];
  edges: Edge[];
}

// ─── Inner component (needs ReactFlow context) ────────────────
function FlowCanvasInner({ nodes, edges }: FlowCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { fitView } = useReactFlow();

  // Fit the view every time nodes change
  useEffect(() => {
    if (nodes.length > 0) {
      // Small delay so React Flow can render the nodes first
      const t = setTimeout(() => fitView({ padding: 0.15, duration: 400 }), 120);
      return () => clearTimeout(t);
    }
  }, [nodes, fitView]);

  // ─── Download PNG handler ───────────────────────────────────
  const handleDownloadPng = useCallback(async () => {
    const viewport = containerRef.current?.querySelector('.react-flow__viewport') as HTMLElement;
    if (!viewport) return;
    try {
      await downloadPng(viewport);
    } catch (err) {
      console.error('PNG export failed:', err);
    }
  }, []);

  const defaultEdgeOptions = {
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
  };

  return (
    <div className="flex-1 flex flex-col h-full relative" ref={containerRef}>
      {/* Download PNG button — floating top-right */}
      {nodes.length > 0 && (
        <button
          onClick={handleDownloadPng}
          className="absolute top-4 right-4 z-30 flex items-center gap-2 px-4 py-2 rounded-xl
            bg-surface-900/80 backdrop-blur-xl border border-white/10 hover:border-white/20
            text-sm font-medium text-slate-300 hover:text-white transition-all
            shadow-lg hover:shadow-xl"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download PNG
        </button>
      )}

      {/* Stats badge */}
      {nodes.length > 0 && (
        <div className="absolute top-4 left-4 z-30 flex items-center gap-3 px-3.5 py-2 rounded-xl
          bg-surface-900/80 backdrop-blur-xl border border-white/10 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            {nodes.length} nodes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            {edges.length} edges
          </span>
        </div>
      )}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
        minZoom={0.05}
        maxZoom={2.5}
        className="bg-[#060a14]"
        proOptions={{ hideAttribution: true }}
      >
        <Controls
          className="!bg-surface-900 !border-white/10 !rounded-xl !shadow-xl
            [&>button]:!bg-surface-800 [&>button]:!border-white/5 [&>button]:!text-slate-400
            [&>button:hover]:!bg-surface-700 [&>button:hover]:!text-white"
          position="bottom-right"
        />
        <MiniMap
          className="!bg-surface-900 !border-white/10 !rounded-xl"
          nodeColor={(node) => {
            switch (node.type) {
              case 'start':    return '#10b981';
              case 'decision': return '#f59e0b';
              case 'end':      return '#ef4444';
              default:         return '#3b82f6';
            }
          }}
          maskColor="rgba(6, 10, 20, 0.75)"
          position="bottom-left"
        />
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1}
          color="rgba(148, 163, 184, 0.06)"
        />

        {/* Empty state */}
        {nodes.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center">
                <svg className="w-9 h-9 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-400 mb-2">No Flowchart Yet</h3>
              <p className="text-sm text-slate-600 max-w-xs">
                Paste your XML in the panel on the left and click<br />
                <span className="text-blue-400 font-medium">Generate Flow</span> to visualize it.
              </p>
            </div>
          </div>
        )}
      </ReactFlow>
    </div>
  );
}

// ─── Wrapper with provider ────────────────────────────────────
export default function FlowCanvas({ nodes, edges }: FlowCanvasProps) {
  return (
    <ReactFlowProvider>
      <FlowCanvasInner nodes={nodes} edges={edges} />
    </ReactFlowProvider>
  );
}
