import { useState } from 'react'
import { obstaculoOptions } from '../../../data/defaultKnowledgeBase'

const QUESTIONS = [
  {
    key: 'dor',
    ai: 'Me conta: qual é o seu maior desafio com marketing digital hoje?',
    placeholder: 'Escreva com suas palavras...',
    defaultValue: 'Tenho dificuldade em atrair clientes qualificados e converter meu tráfego em vendas de verdade.',
    type: 'text',
  },
  {
    key: 'tentativa',
    ai: 'Você já tentou resolver isso antes? O que não funcionou?',
    placeholder: 'Escreva com suas palavras...',
    defaultValue: 'Já tentei impulsionar posts no Instagram e contratar um gestor de tráfego, mas os resultados foram bem abaixo do esperado.',
    type: 'text',
  },
  {
    key: 'sonho',
    ai: 'Se você resolvesse isso nos próximos 90 dias, o que mudaria na sua vida ou no seu negócio?',
    placeholder: 'Escreva com suas palavras...',
    defaultValue: 'Conseguiria escalar meu negócio, ter previsibilidade de receita e finalmente sair da operação do dia a dia.',
    type: 'text',
  },
  {
    key: 'obstaculo',
    ai: 'O que tem te impedido de dar esse passo até agora?',
    type: 'chips',
  },
]

function AiBubble({ text }) {
  return (
    <div className="flex animate-fade-in-up">
      <div className="max-w-[85%] bg-eduzz-bubble border-l-4 border-eduzz-lightblue rounded-r-xl rounded-tl-xl px-4 py-3 text-sm text-eduzz-blue leading-relaxed">
        {text}
      </div>
    </div>
  )
}

function UserBubble({ text }) {
  return (
    <div className="flex justify-end animate-fade-in-up">
      <div className="max-w-[85%] bg-eduzz-blue text-white rounded-l-xl rounded-tr-xl px-4 py-3 text-sm leading-relaxed">
        {text}
      </div>
    </div>
  )
}

function answerLabel(question, value, detalhe) {
  if (question.type === 'chips') {
    const opt = obstaculoOptions.find((o) => o.id === value)
    if (value === 'outra' && detalhe) return `${opt.label}: "${detalhe}"`
    return opt ? opt.label : value
  }
  return value
}

export default function ConversaScreen({ onComplete }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [inputValue, setInputValue] = useState(QUESTIONS[0].defaultValue ?? '')
  const [selectedChip, setSelectedChip] = useState(null)
  const [obstaculoDetalhe, setObstaculoDetalhe] = useState('')

  const progress = step + 1

  function goNext(value, extra) {
    const question = QUESTIONS[step]
    const nextAnswers = { ...answers, [question.key]: value }
    if (extra !== undefined) nextAnswers.obstaculoDetalhe = extra
    setAnswers(nextAnswers)

    if (step === QUESTIONS.length - 1) {
      onComplete(nextAnswers)
      return
    }
    const nextStep = step + 1
    setStep(nextStep)
    setInputValue(QUESTIONS[nextStep]?.defaultValue ?? '')
    setSelectedChip(null)
    setObstaculoDetalhe('')
  }

  const current = QUESTIONS[step]
  const isLast = step === QUESTIONS.length - 1
  const canContinueText = inputValue.trim().length > 0
  const canContinueChip = selectedChip && (selectedChip !== 'outra' || obstaculoDetalhe.trim().length > 0)

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-5">
        <div className="flex gap-1.5">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i < progress ? 'bg-eduzz-lightblue' : 'bg-eduzz-border'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 max-h-[420px]">
        {QUESTIONS.slice(0, step + 1).map((q, i) => (
          <div key={q.key} className="space-y-3">
            <AiBubble text={q.ai} />
            {i < step && <UserBubble text={answerLabel(q, answers[q.key], answers.obstaculoDetalhe)} />}
          </div>
        ))}
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-eduzz-border">
        {current.type === 'text' ? (
          <>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={current.placeholder}
              rows={2}
              className="w-full resize-none rounded-xl border border-eduzz-border px-4 py-3 text-sm text-eduzz-blue placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-eduzz-lightblue"
            />
            <button
              disabled={!canContinueText}
              onClick={() => goNext(inputValue.trim())}
              className="w-full mt-3 bg-eduzz-yellow text-eduzz-blue font-bold rounded-xl py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-95 transition"
            >
              Continuar →
            </button>
          </>
        ) : (
          <>
            <div className="space-y-2">
              {obstaculoOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedChip(opt.id)}
                  className={`w-full text-left rounded-xl border-2 px-4 py-2.5 text-sm transition ${
                    selectedChip === opt.id
                      ? 'bg-eduzz-blue border-eduzz-blue text-white'
                      : 'border-eduzz-blue text-eduzz-blue hover:bg-eduzz-bubble'
                  }`}
                >
                  <span className="mr-2">{opt.emoji}</span>
                  {opt.label}
                </button>
              ))}
            </div>
            {selectedChip === 'outra' && (
              <textarea
                value={obstaculoDetalhe}
                onChange={(e) => setObstaculoDetalhe(e.target.value)}
                placeholder="Qual é a sua dúvida?"
                rows={2}
                className="w-full resize-none mt-3 rounded-xl border border-eduzz-border px-4 py-3 text-sm text-eduzz-blue placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-eduzz-lightblue"
              />
            )}
            <button
              disabled={!canContinueChip}
              onClick={() => goNext(selectedChip, obstaculoDetalhe.trim())}
              className="w-full mt-3 bg-eduzz-yellow text-eduzz-blue font-bold rounded-xl py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-95 transition"
            >
              {isLast ? 'Ver meu resultado →' : 'Continuar →'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
