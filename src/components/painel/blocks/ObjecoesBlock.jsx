import { useState } from 'react'
import { Card, TextArea, TextField } from '../ui'

const OBJECOES = [
  {
    id: 'preco',
    emoji: '💰',
    title: 'Objeção: Preço',
    respostaLabel: 'O que a IA deve responder quando o comprador disser que o preço preocupa?',
    respostaPlaceholder:
      'Ex: mostre o parcelamento, calcule o ROI, compare com o custo de não resolver o problema...',
    extraKey: 'roi',
    extraLabel: 'Argumento de ROI em uma linha',
    extraPlaceholder: 'Ex: Mesmo 1 novo cliente por mês já paga o curso em menos de 60 dias.',
    extraType: 'text',
  },
  {
    id: 'duvida',
    emoji: '🤔',
    title: 'Objeção: Dúvida se funciona pra mim',
    respostaLabel: 'O que a IA deve responder?',
    respostaPlaceholder: 'Ex: cite perfis de alunos similares, mencione a garantia, mostre depoimento específico...',
    extraKey: 'depoimento',
    extraLabel: 'Cole aqui um depoimento de aluno com perfil parecido',
    extraPlaceholder: 'Ex: "Eu não sabia nada de marketing e em 5 semanas já tinha resultado..." — Nome, contexto',
    extraType: 'textarea',
  },
  {
    id: 'tempo',
    emoji: '⏰',
    title: 'Objeção: Falta de tempo',
    respostaLabel: 'O que a IA deve responder?',
    respostaPlaceholder:
      'Ex: mencione que as aulas têm X minutos, que o acesso é vitalício, que dá pra estudar no ritmo...',
    extraKey: 'cargaHoraria',
    extraLabel: 'Carga horária real do curso',
    extraPlaceholder: 'Ex: 3 horas por semana',
    extraType: 'text',
  },
  {
    id: 'tentei',
    emoji: '😔',
    title: 'Objeção: Já tentei e não funcionou',
    respostaLabel: 'O que a IA deve responder?',
    respostaPlaceholder: 'Ex: diferencie o método do que o comprador tentou antes, mostre por que é diferente...',
    extraKey: 'diferenca',
    extraLabel: 'Principal diferença em relação ao que existe no mercado',
    extraPlaceholder: 'Ex: foca em estratégia de negócio local, não em técnicas genéricas de conteúdo',
    extraType: 'text',
  },
]

export default function ObjecoesBlock({ objecoes, onUpdate }) {
  const [expanded, setExpanded] = useState('preco')

  return (
    <Card title="Objeções e respostas" subtitle="O que a IA fala quando o comprador trava em cada obstáculo">
      <div className="space-y-3">
        {OBJECOES.map((obj) => {
          const isOpen = expanded === obj.id
          const data = objecoes[obj.id]
          return (
            <div key={obj.id} className="border border-eduzz-border rounded overflow-hidden">
              <button
                onClick={() => setExpanded(isOpen ? null : obj.id)}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition text-left"
              >
                <span className="text-sm font-semibold text-slate-700">
                  <span className="mr-2">{obj.emoji}</span>
                  {obj.title}
                </span>
                <span className="text-slate-400 text-xs">{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div className="p-4 space-y-3 bg-white">
                  <TextArea
                    label={obj.respostaLabel}
                    placeholder={obj.respostaPlaceholder}
                    value={data.resposta}
                    onChange={(e) => onUpdate([obj.id, 'resposta'], e.target.value)}
                  />
                  {obj.extraType === 'textarea' ? (
                    <TextArea
                      label={obj.extraLabel}
                      placeholder={obj.extraPlaceholder}
                      rows={2}
                      value={data[obj.extraKey]}
                      onChange={(e) => onUpdate([obj.id, obj.extraKey], e.target.value)}
                    />
                  ) : (
                    <TextField
                      label={obj.extraLabel}
                      placeholder={obj.extraPlaceholder}
                      value={data[obj.extraKey]}
                      onChange={(e) => onUpdate([obj.id, obj.extraKey], e.target.value)}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
