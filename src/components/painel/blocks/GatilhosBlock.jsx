import { Card } from '../ui'

function CheckboxRow({ checked, onChange, label, children }) {
  return (
    <label className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 w-4 h-4 accent-eduzz-blue"
      />
      <div className="flex-1">
        <p className="text-sm text-slate-700">{label}</p>
        {children}
      </div>
    </label>
  )
}

export default function GatilhosBlock({ gatilhos, onUpdate }) {
  return (
    <Card title="Configuração do gatilho" subtitle="Quando o quiz aparece">
      <CheckboxRow
        checked={gatilhos.exitIntent}
        onChange={(v) => onUpdate(['exitIntent'], v)}
        label="Exit intent — quando o cursor se move para fechar a aba"
      />
      <CheckboxRow
        checked={gatilhos.inatividade}
        onChange={(v) => onUpdate(['inatividade'], v)}
        label="Inatividade — após um período sem interação"
      >
        {gatilhos.inatividade && (
          <div className="mt-2 flex items-center gap-2">
            <input
              type="number"
              value={gatilhos.inatividadeSegundos}
              onChange={(e) => onUpdate(['inatividadeSegundos'], Number(e.target.value))}
              onClick={(e) => e.stopPropagation()}
              className="w-20 rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-eduzz-lightblue"
            />
            <span className="text-xs text-slate-400">segundos sem interação</span>
          </div>
        )}
      </CheckboxRow>
      <CheckboxRow
        checked={gatilhos.botaoVoltar}
        onChange={(v) => onUpdate(['botaoVoltar'], v)}
        label="Botão Voltar — quando o comprador aperta voltar no navegador"
      />
    </Card>
  )
}
