import { Toggle, Badge } from '../ui'

export default function HeaderBlock({ ativo, onToggle }) {
  return (
    <div className="bg-white border border-eduzz-border rounded p-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-lg font-bold text-black">Quiz com IA — Recuperação Inteligente</h2>
          <p className="text-sm text-slate-500 mt-1">
            Configure o assistente de IA que conversa com compradores que estão saindo sem comprar.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Badge active={ativo} />
          <Toggle checked={ativo} onChange={onToggle} size="lg" />
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-eduzz-border flex items-center gap-2 text-sm text-eduzz-textDark">
        Ativar quiz para este produto
      </div>
    </div>
  )
}
