export function Card({ title, subtitle, children, right }) {
  return (
    <div className="bg-white border border-eduzz-border rounded">
      {(title || right) && (
        <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-eduzz-border">
          <div>
            {title && <h3 className="text-base font-medium text-black">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
          </div>
          {right}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}

export function TextField({ label, hint, ...props }) {
  return (
    <label className="block">
      {label && <span className="block text-sm text-eduzz-textDark mb-1.5">{label}</span>}
      <input
        {...props}
        className="w-full rounded border border-eduzz-border px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-eduzz-blue"
      />
      {hint && <span className="block text-[11px] text-slate-400 mt-1">{hint}</span>}
    </label>
  )
}

export function TextArea({ label, hint, rows = 3, ...props }) {
  return (
    <label className="block">
      {label && <span className="block text-sm text-eduzz-textDark mb-1.5">{label}</span>}
      <textarea
        rows={rows}
        {...props}
        className="w-full resize-none rounded border border-eduzz-border px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-eduzz-blue"
      />
      {hint && <span className="block text-[11px] text-slate-400 mt-1">{hint}</span>}
    </label>
  )
}

export function Toggle({ checked, onChange, size = 'md' }) {
  const isLarge = size === 'lg'
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex items-center rounded-full transition-colors ${
        isLarge ? 'w-12 h-6' : 'w-9 h-5'
      } ${checked ? 'bg-eduzz-blue' : 'bg-slate-300'}`}
    >
      <span
        className={`inline-block rounded-full bg-white shadow transform transition-transform ${
          isLarge ? 'w-5 h-5' : 'w-3.5 h-3.5'
        } ${checked ? (isLarge ? 'translate-x-6' : 'translate-x-4') : 'translate-x-0.5'}`}
      />
    </button>
  )
}

export function Badge({ active }) {
  return (
    <span
      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
        active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
      }`}
    >
      {active ? 'Ativo' : 'Inativo'}
    </span>
  )
}
