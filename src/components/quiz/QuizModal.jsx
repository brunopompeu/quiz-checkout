import { useState } from 'react'
import AberturaScreen from './screens/AberturaScreen'
import ConversaScreen from './screens/ConversaScreen'
import ResultadoScreen from './screens/ResultadoScreen'
import SaidaScreen from './screens/SaidaScreen'

export default function QuizModal({ kb, onClose }) {
  const [step, setStep] = useState('abertura')
  const [answers, setAnswers] = useState(null)

  function handleComprar() {
    setStep('comprado')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/35" onClick={() => setStep('saida')} />

      <div className="relative w-full max-w-[480px] bg-white rounded-2xl shadow-2xl border border-eduzz-border font-syne overflow-hidden">
        <button
          onClick={() => setStep('saida')}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg leading-none z-10"
          aria-label="Fechar"
        >
          ✕
        </button>

        {step === 'abertura' && (
          <AberturaScreen onStart={() => setStep('conversa')} onExit={() => setStep('saida')} />
        )}

        {step === 'conversa' && (
          <ConversaScreen
            onComplete={(finalAnswers) => {
              setAnswers(finalAnswers)
              setStep('resultado')
            }}
          />
        )}

        {step === 'resultado' && answers && (
          <ResultadoScreen kb={kb} answers={answers} onComprar={handleComprar} />
        )}

        {step === 'saida' && <SaidaScreen onClose={onClose} />}

        {step === 'comprado' && (
          <div className="p-10 text-center animate-fade-in-up">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-lg font-bold text-eduzz-blue mb-2">Vaga garantida!</h2>
            <p className="text-sm text-eduzz-gray mb-6">
              Você seria redirecionado para concluir o pagamento no checkout.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-eduzz-blue text-white font-semibold rounded-xl py-3 text-sm"
            >
              Fechar simulação
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
