import { useState } from 'react'
import { buildResultado } from '../resultadoBuilder'

export default function ResultadoScreen({ kb, answers, onComprar }) {
  const { espelho, conexao, objecao } = buildResultado(kb, answers)
  const [showDuvida, setShowDuvida] = useState(false)
  const [duvidaTexto, setDuvidaTexto] = useState('')
  const [duvidaEnviada, setDuvidaEnviada] = useState(false)

  function enviarDuvida() {
    if (!duvidaTexto.trim()) return
    setDuvidaEnviada(true)
  }

  return (
    <div className="p-6 space-y-4 animate-fade-in-up max-h-[560px] overflow-y-auto">
      <div className="bg-eduzz-bubble border-l-4 border-eduzz-lightblue rounded-r-xl rounded-tl-xl px-4 py-3 text-sm text-eduzz-blue leading-relaxed">
        {espelho}
      </div>

      <div className="bg-eduzz-bubble border-l-4 border-eduzz-lightblue rounded-r-xl rounded-tl-xl px-4 py-3 text-sm text-eduzz-blue leading-relaxed">
        {conexao}
      </div>

      <div className="bg-eduzz-bubble border-l-4 border-eduzz-lightblue rounded-r-xl rounded-tl-xl px-4 py-3 text-sm text-eduzz-blue leading-relaxed">
        {objecao}
      </div>

      <div className="pt-2">
        <button
          onClick={onComprar}
          className="w-full bg-eduzz-yellow text-eduzz-blue font-bold rounded-xl py-3.5 text-sm hover:brightness-95 transition"
        >
          Quero garantir minha vaga agora
        </button>

        {!showDuvida && !duvidaEnviada && (
          <button
            onClick={() => setShowDuvida(true)}
            className="mt-3 w-full text-xs text-eduzz-gray hover:text-slate-600 underline underline-offset-2"
          >
            Ainda tenho dúvidas
          </button>
        )}

        {showDuvida && !duvidaEnviada && (
          <div className="mt-3 space-y-2">
            <textarea
              value={duvidaTexto}
              onChange={(e) => setDuvidaTexto(e.target.value)}
              placeholder="Qual é a sua dúvida?"
              rows={2}
              className="w-full resize-none rounded-xl border border-eduzz-border px-4 py-3 text-sm text-eduzz-blue placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-eduzz-lightblue"
            />
            <button
              onClick={enviarDuvida}
              disabled={!duvidaTexto.trim()}
              className="w-full bg-eduzz-blue text-white font-semibold rounded-xl py-2.5 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Enviar dúvida
            </button>
          </div>
        )}

        {duvidaEnviada && (
          <p className="mt-3 text-xs text-center text-eduzz-gray">
            Recebemos sua dúvida! Alguém do nosso time vai te responder por e-mail em breve.
          </p>
        )}
      </div>
    </div>
  )
}
