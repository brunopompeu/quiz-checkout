import { Card, TextField, TextArea } from '../ui'

const MAX_FAQ = 20

export default function FaqBlock({ faq, onChange }) {
  function updateItem(index, field, value) {
    const next = faq.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    onChange(next)
  }

  function addItem() {
    if (faq.length >= MAX_FAQ) return
    onChange([...faq, { pergunta: '', resposta: '' }])
  }

  function removeItem(index) {
    onChange(faq.filter((_, i) => i !== index))
  }

  return (
    <Card title="FAQ do produto" subtitle="Perguntas frequentes que a IA usa para responder dúvidas específicas">
      <div className="space-y-3">
        {faq.map((item, index) => (
          <div key={index} className="border border-eduzz-border rounded p-4 relative">
            <button
              onClick={() => removeItem(index)}
              className="absolute top-3 right-3 text-slate-400 hover:text-red-500 text-sm"
              aria-label="Remover pergunta"
            >
              ✕
            </button>
            <div className="pr-6 space-y-2">
              <TextField
                label="Pergunta"
                placeholder='Ex: "Tem certificado?"'
                value={item.pergunta}
                onChange={(e) => updateItem(index, 'pergunta', e.target.value)}
              />
              <TextArea
                label="Resposta"
                rows={2}
                placeholder="Ex: Sim, o certificado é emitido ao concluir 100% do curso..."
                value={item.resposta}
                onChange={(e) => updateItem(index, 'resposta', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addItem}
        disabled={faq.length >= MAX_FAQ}
        className="mt-4 w-full border-2 border-dashed border-eduzz-border rounded py-2.5 text-sm font-semibold text-eduzz-blue hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        + Adicionar pergunta frequente
      </button>
      <p className="text-[11px] text-slate-400 mt-2">{faq.length}/{MAX_FAQ} perguntas</p>
    </Card>
  )
}
