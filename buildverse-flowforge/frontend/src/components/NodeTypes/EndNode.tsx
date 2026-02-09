import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

interface EndNodeData {
  label: string;
  text?: string;
  attributes?: Record<string, string>;
}

const EndNode = memo(({ data, selected }: NodeProps<EndNodeData>) => {
  return (
    <div
      className={`
        relative min-w-[160px] max-w-[240px] rounded-full border-2 transition-all duration-200
        bg-gradient-to-br from-[#2e0508] to-[#1a0304]
        ${selected
          ? 'border-red-400 shadow-[0_0_24px_rgba(239,68,68,0.4)]'
          : 'border-red-500/40 hover:border-red-400/60'}
      `}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-red-400 !border-2 !border-[#1a0304] !-top-1.5"
      />

      <div className="px-6 py-4 flex items-center gap-2.5 justify-center">
        <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold text-red-400/70 uppercase tracking-widest">End</p>
          <p className="text-sm font-bold text-white truncate font-mono">{data.label}</p>
        </div>
      </div>
    </div>
  );
});

EndNode.displayName = 'EndNode';
export default EndNode;

