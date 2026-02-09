import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

interface DecisionNodeData {
  label: string;
  text?: string;
  attributes?: Record<string, string>;
}

/**
 * Diamond-shaped decision node.
 * Uses a rotated square with counter-rotated content.
 */
const DecisionNode = memo(({ data, selected }: NodeProps<DecisionNodeData>) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
      {/* Target handle — top of diamond */}
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-amber-400 !border-2 !border-[#0a0f1f] !-top-1.5 z-20"
      />

      {/* Diamond shape */}
      <div
        className={`
          absolute inset-0 rounded-xl border-2 transition-all duration-200
          bg-gradient-to-br from-[#1a1508] to-[#0f0d06]
          ${selected
            ? 'border-amber-400 shadow-[0_0_28px_rgba(245,158,11,0.35)]'
            : 'border-amber-500/40 hover:border-amber-400/60'}
        `}
        style={{ transform: 'rotate(45deg)', width: '100px', height: '100px', margin: 'auto' }}
      />

      {/* Content — counter-rotated to stay upright */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <svg className="w-4 h-4 text-amber-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
        <p className="text-[10px] font-semibold text-amber-400/80 uppercase tracking-wider">Decision</p>
        <p className="text-xs font-bold text-white font-mono mt-0.5 max-w-[100px] truncate text-center px-1">
          {data.label}
        </p>
      </div>

      {/* Source handle — bottom of diamond */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-amber-400 !border-2 !border-[#0a0f1f] !-bottom-1.5 z-20"
      />
    </div>
  );
});

DecisionNode.displayName = 'DecisionNode';
export default DecisionNode;
