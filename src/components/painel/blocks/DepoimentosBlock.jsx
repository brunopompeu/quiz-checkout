import { Card, TextField, TextArea } from '../ui'

export default function DepoimentosBlock({ depoimentos, onChange }) {
  function updateItem(index, field, value) {
    const next = depoimentos.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    onChange(next)
  }

  function addItem() {
    onChange([...depoimentos, { nome: '', contexto: '', texto: '', resultado: '' }])
  }

  function removeItem(index) {
    onChange(depoimentos.filter((_, i) => i !== index))
  }

  return (
    <Card title="Depoimentos de prova social" subtitle="A IA usa esses depoimentos para reforçar credibilidade">
      <div className="space-y-3">
        {depoimentos.map((item, index) => (
          <div key={index} className="border border-eduzz-border rounded p-4 relative">
            <button
              onClick={() => removeItem(index)}
              className="absolute top-3 right-3 text-slate-400 hover:text-red-500 text-sm"
              aria-label="Remover depoimento"
            >
              ✕
            </button>
            <div className="pr-6 space-y-2">
              <div className="flex gap-3">
                <div className="flex-1">
                  <TextField
                    label="Nome do aluno"
                    placeholder="Ex: Fernanda Alves"
                    value={item.nome}
                    onChange={(e) => updateItem(index, 'nome', e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    label="Cargo/contexto"
                    placeholder="Ex: Dona de salão de beleza, SP"
                    value={item.contexto}
                    onChange={(e) => updateItem(index, 'contexto', e.target.value)}
                  />
                </div>
              </div>
              <TextArea
                label="Depoimento"
                rows={2}
                placeholder="Texto curto, máx 280 caracteres"
                maxLength={280}
                value={item.texto}
                onChange={(e) => updateItem(index, 'texto', e.target.value)}
              />
              <TextField
                label="Resultado específico"
                placeholder="Ex: Conseguiu 12 novos clientes no primeiro mês"
                value={item.resultado}
                onChange={(e) => updateItem(index, 'resultado', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addItem}
        className="mt-4 w-full border-2 border-dashed border-eduzz-border rounded py-2.5 text-sm font-semibold text-eduzz-blue hover:bg-slate-50 transition"
      >
        + Adicionar depoimento
      </button>
    </Card>
  )
}
