const MAIN_LINKS = ['Resumo', 'Minhas Compras']
const SECONDARY_LINKS = ['Produtos', 'Vendas', 'Relatórios', 'Analytics']
const SECTIONS = ['VENDAS', 'PRODUTOS', 'RELATÓRIOS', 'FINANCEIRO', 'ASSINATURAS', 'ANALYTICS', 'AVANÇADO']

export default function Sidebar() {
  return (
    <aside className="w-60 shrink-0 bg-white border-r border-eduzz-border min-h-full py-8 px-6">
      <nav className="space-y-1">
        {MAIN_LINKS.map((label) => (
          <div key={label} className="text-black text-base py-1">
            {label}
          </div>
        ))}
      </nav>

      <nav className="mt-4 space-y-1">
        {SECONDARY_LINKS.map((label) => (
          <div key={label} className="text-black text-base py-1">
            {label}
          </div>
        ))}
      </nav>

      <div className="mt-4 space-y-4">
        {SECTIONS.map((label) => (
          <div key={label} className="flex items-center gap-2">
            <span className="w-4 h-px bg-eduzz-border" />
            <span className="text-xs font-medium tracking-wider text-slate-500">{label}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
