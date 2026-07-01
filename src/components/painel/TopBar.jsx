const TABS = [
  'Geral',
  'Preços e ofertas',
  'Meios de pagamento',
  'Parceiros',
  'Afiliados',
  'Entrega',
  'Recuperação de vendas',
  'Avançado',
]

export default function TopBar() {
  return (
    <div className="bg-white border-b border-eduzz-border px-8 pt-5">
      <p className="text-xs text-slate-400 mb-1">Meus produtos / Edição do produto</p>

      <div className="flex items-center justify-between gap-4 mb-4">
        <h1 className="text-2xl font-bold text-black">3021269 - Marketing Digital para Pequenos Negócios - Variação 1</h1>
        <button className="shrink-0 bg-eduzz-blue text-white font-medium rounded px-4 py-2 text-sm hover:brightness-110 transition">
          Nova variação
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto">
        {TABS.map((tab) => {
          const active = tab === 'Recuperação de vendas'
          return (
            <span
              key={tab}
              className={`pb-3 text-sm whitespace-nowrap border-b-2 cursor-default ${
                active ? 'border-eduzz-amber text-black font-medium' : 'border-transparent text-slate-400'
              }`}
            >
              {tab}
            </span>
          )
        })}
      </div>
    </div>
  )
}
