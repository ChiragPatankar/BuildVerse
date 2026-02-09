import { useState, useRef, useCallback } from 'react';

// ─── Sample XML snippets ──────────────────────────────────────
const SAMPLES = {
  simple: `<workflow>
  <start>
    <fetch_data source="api" />
    <process_data>
      <validate />
      <transform />
    </process_data>
    <save_result target="database" />
  </start>
</workflow>`,

  decisions: `<pipeline name="Order Processing">
  <receive_order>
    <validate_payment method="stripe" />
    <if_payment_valid>
      <process_order>
        <check_inventory />
        <condition_in_stock>
          <ship_order carrier="fedex" />
          <send_confirmation />
        </condition_in_stock>
        <condition_out_of_stock>
          <notify_customer status="backorder" />
          <schedule_restock />
        </condition_out_of_stock>
      </process_order>
    </if_payment_valid>
    <if_payment_failed>
      <send_failure_notice />
      <log_attempt />
    </if_payment_failed>
  </receive_order>
</pipeline>`,

  complex: `<automation name="Lead Qualification">
  <trigger type="webhook">
    <receive_lead />
    <enrich_data provider="clearbit" />
    <switch_lead_score>
      <score_high threshold="80">
        <assign_to_sales team="enterprise" />
        <send_slack_alert channel="hot-leads" />
      </score_high>
      <score_medium threshold="50">
        <add_to_nurture_sequence />
        <schedule_followup days="3" />
      </score_medium>
      <score_low>
        <add_to_newsletter />
      </score_low>
    </switch_lead_score>
    <update_crm system="hubspot" />
    <log_activity />
  </trigger>
</automation>`,
};

// ─── Props ────────────────────────────────────────────────────
interface XMLInputPanelProps {
  onGenerate: (xml: string) => void;
  loading: boolean;
  error: string | null;
}

export default function XMLInputPanel({ onGenerate, loading, error }: XMLInputPanelProps) {
  const [xml, setXml] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ─── File upload ────────────────────────────────────────────
  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      setXml(ev.target?.result as string);
    };
    reader.readAsText(file);
    e.target.value = '';
  }, []);

  // ─── Generate ───────────────────────────────────────────────
  const handleGenerate = useCallback(() => {
    if (!xml.trim()) return;
    onGenerate(xml);
  }, [xml, onGenerate]);

  // ─── Clear ──────────────────────────────────────────────────
  const handleClear = useCallback(() => {
    setXml('');
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-[#0a0e1a] border-r border-white/[0.06]">
      {/* Panel header */}
      <div className="px-5 py-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white leading-none">XML Input</h2>
            <p className="text-[11px] text-slate-500 mt-0.5">Paste or upload XML to visualize</p>
          </div>
        </div>
      </div>

      {/* Sample loaders */}
      <div className="px-5 py-3 border-b border-white/[0.04] flex items-center gap-2 flex-wrap">
        <span className="text-[11px] text-slate-600 mr-1">Samples:</span>
        {Object.entries(SAMPLES).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setXml(value)}
            className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08]
              text-slate-400 hover:text-white border border-white/[0.06] hover:border-white/[0.12]
              transition-all capitalize"
          >
            {key}
          </button>
        ))}
      </div>

      {/* Textarea */}
      <div className="flex-1 p-4 min-h-0">
        <textarea
          value={xml}
          onChange={(e) => setXml(e.target.value)}
          placeholder={`Paste your XML here...\n\n<workflow>\n  <step1>\n    <if_condition>\n      <action_a />\n      <action_b />\n    </if_condition>\n  </step1>\n</workflow>`}
          spellCheck={false}
          className="w-full h-full rounded-xl bg-[#060a14] border border-white/[0.06]
            text-sm font-mono text-slate-200 placeholder:text-slate-700
            focus:outline-none focus:border-blue-500/30 focus:ring-1 focus:ring-blue-500/15
            resize-none p-4 leading-relaxed
            scrollbar-thin transition-colors"
        />
      </div>

      {/* Error display */}
      {error && (
        <div className="mx-4 mb-3 px-4 py-3 rounded-xl bg-red-500/[0.08] border border-red-500/20 flex items-start gap-2.5">
          <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <p className="text-sm text-red-400 leading-snug">{error}</p>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 pb-4 flex items-center gap-2">
        {/* File upload */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl
            bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.12]
            text-xs font-medium text-slate-400 hover:text-white transition-all"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          Upload .xml
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".xml,.xsd,.xsl,.svg,.xhtml"
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Clear */}
        <button
          onClick={handleClear}
          disabled={!xml.trim()}
          className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl
            bg-white/[0.04] hover:bg-red-500/10 border border-white/[0.06] hover:border-red-500/20
            text-xs font-medium text-slate-400 hover:text-red-400 transition-all
            disabled:opacity-30 disabled:pointer-events-none"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          Clear
        </button>

        <div className="flex-1" />

        {/* Generate Flow — primary action */}
        <button
          onClick={handleGenerate}
          disabled={!xml.trim() || loading}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl
            bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400
            text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all
            disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" />
              </svg>
              Generating…
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              Generate Flow
            </>
          )}
        </button>
      </div>
    </div>
  );
}

