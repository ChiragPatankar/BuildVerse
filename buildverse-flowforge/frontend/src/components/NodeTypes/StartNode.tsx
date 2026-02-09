import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

interface StartNodeData {
  label: string;
  text?: string;
  attributes?: Record<string, string>;
}

const StartNode = memo(({ data, selected }: NodeProps<StartNodeData>) => {
  return (
    <div
      className={`
        relative min-w-[160px] max-w-[240px] rounded-full border-2 transition-all duration-200
        bg-gradient-to-br from-[#052e16] to-[#031a0d]
        ${selected
          ? 'border-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.4)]'
          : 'border-emerald-500/40 hover:border-emerald-400/60'}
      `}
    >
      <div className="px-6 py-4 flex items-center gap-2.5 justify-center">
        <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold text-emerald-400/70 uppercase tracking-widest">Start</p>
          <p className="text-sm font-bold text-white truncate font-mono">{data.label}</p>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-emerald-400 !border-2 !border-[#031a0d] !-bottom-1.5"
      />
    </div>
  );
});

StartNode.displayName = 'StartNode';
export default StartNode;

