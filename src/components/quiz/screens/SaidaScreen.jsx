import { useState } from 'react'

export default function SaidaScreen({ onClose }) {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  function enviar() {
    if (!email.trim()) return
    setEnviado(true)
  }

  return (
    <div className="p-8 text-center animate-fade-in-up">
      {!enviado ? (
        <>
          <div className="w-14 h-14 mx-auto rounded-full bg-eduzz-bubble border-2 border-eduzz-lightblue flex items-center justify-center text-2xl mb-4">
            ✉️
          </div>
          <h2 className="text-lg font-bold text-eduzz-blue mb-2">Tudo bem!</h2>
          <p className="text-sm text-eduzz-gray leading-relaxed mb-5">
            Deixa seu e-mail e te mando um resumo de tudo que esse curso pode fazer por você.
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full rounded-xl border border-eduzz-border px-4 py-3 text-sm text-eduzz-blue placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-eduzz-lightblue mb-3"
          />
          <button
            onClick={enviar}
            disabled={!email.trim()}
            className="w-full bg-eduzz-yellow text-eduzz-blue font-bold rounded-xl py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-95 transition"
          >
            Enviar
          </button>
          <button
            onClick={onClose}
            className="mt-4 text-xs text-eduzz-gray hover:text-slate-600 underline underline-offset-2"
          >
            Não, obrigado
          </button>
        </>
      ) : (
        <>
          <div className="w-14 h-14 mx-auto rounded-full bg-eduzz-bubble border-2 border-eduzz-lightblue flex items-center justify-center text-2xl mb-4">
            ✅
          </div>
          <h2 className="text-lg font-bold text-eduzz-blue mb-2">Combinado!</h2>
          <p className="text-sm text-eduzz-gray leading-relaxed mb-5">
            Te enviamos um resumo em {email}. Qualquer coisa, é só responder o e-mail.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-eduzz-blue text-white font-semibold rounded-xl py-3 text-sm"
          >
            Fechar
          </button>
        </>
      )}
    </div>
  )
}
