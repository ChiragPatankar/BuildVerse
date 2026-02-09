import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

interface DefaultNodeData {
  label: string;
  text?: string;
  attributes?: Record<string, string>;
}

const DefaultNode = memo(({ data, selected }: NodeProps<DefaultNodeData>) => {
  const hasAttributes = data.attributes && Object.keys(data.attributes).length > 0;
  const hasText = data.text && data.text.trim().length > 0;

  return (
    <div
      className={`
        relative min-w-[180px] max-w-[280px] rounded-xl border-2 transition-all duration-200
        bg-gradient-to-br from-[#0f1729] to-[#0a0f1f]
        ${selected
          ? 'border-blue-400 shadow-[0_0_24px_rgba(59,130,246,0.35)]'
          : 'border-blue-500/30 hover:border-blue-400/50'}
      `}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-blue-400 !border-2 !border-[#0a0f1f] !-top-1.5"
      />

      {/* Blue accent bar */}
      <div className="h-1 rounded-t-[10px] bg-gradient-to-r from-blue-500 to-blue-400" />

      <div className="px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold text-blue-400/70 uppercase tracking-widest">Element</p>
            <p className="text-sm font-bold text-white truncate font-mono">&lt;{data.label}&gt;</p>
          </div>
        </div>

        {hasText && (
          <div className="mt-2 px-2.5 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.04]">
            <p className="text-xs text-slate-400 font-mono truncate">{data.text}</p>
          </div>
        )}

        {hasAttributes && (
          <div className="mt-2 flex flex-wrap gap-1">
            {Object.entries(data.attributes!).slice(0, 3).map(([key, value]) => (
              <span key={key} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300/80 font-mono">
                {key}=&quot;{value}&quot;
              </span>
            ))}
            {Object.keys(data.attributes!).length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500">
                +{Object.keys(data.attributes!).length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-blue-400 !border-2 !border-[#0a0f1f] !-bottom-1.5"
      />
    </div>
  );
});

DefaultNode.displayName = 'DefaultNode';
export default DefaultNode;
