import { useState } from 'react'
import { Card, TextArea } from '../ui'

function simulateAnswer(kb, situacao) {
  return `Entendo — você disse "${situacao}". ${kb.productName} foi criado exatamente pra quem enfrenta isso: ${kb.problemaCentral} O diferencial aqui é que ${kb.diferencial.charAt(0).toLowerCase()}${kb.diferencial.slice(1)}`
}

export default function PreviewBlock({ kb, completeness, onOpenPreview }) {
  const [situacao, setSituacao] = useState('')
  const [resposta, setResposta] = useState(null)

  function testar() {
    if (!situacao.trim()) return
    setResposta(simulateAnswer(kb, situacao.trim()))
  }

  return (
    <Card title="Preview e teste">
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-semibold text-slate-600">Base de conhecimento</span>
          <span className="text-xs font-bold text-eduzz-blue">{completeness}% completa</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-eduzz-blue rounded-full transition-all"
            style={{ width: `${completeness}%` }}
          />
        </div>
      </div>

      <button
        onClick={onOpenPreview}
        className="w-full bg-eduzz-blue text-white font-semibold rounded py-3 text-sm hover:brightness-110 transition mb-4"
      >
        Visualizar como o comprador vai ver
      </button>

      <div className="border-t border-eduzz-border pt-4">
        <p className="text-xs font-semibold text-slate-600 mb-2">Testar com uma situação</p>
        <TextArea
          rows={2}
          placeholder="Ex: cliente que não sabe usar Instagram para vender e já perdeu dinheiro com anúncio..."
          value={situacao}
          onChange={(e) => setSituacao(e.target.value)}
        />
        <button
          onClick={testar}
          disabled={!situacao.trim()}
          className="mt-2 w-full border border-eduzz-blue text-eduzz-blue font-semibold rounded py-2.5 text-sm hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Ver o que a IA responderia
        </button>

        {resposta && (
          <div className="mt-3 bg-eduzz-bubble border-l-4 border-eduzz-lightblue rounded-r-xl rounded-tl-xl px-4 py-3 text-sm text-eduzz-blue leading-relaxed">
            {resposta}
          </div>
        )}
      </div>
    </Card>
  )
}
