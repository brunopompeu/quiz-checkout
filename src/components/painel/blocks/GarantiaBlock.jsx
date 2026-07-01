import { Card, TextArea, TextField } from '../ui'

export default function GarantiaBlock({ garantia, onUpdate }) {
  return (
    <Card title="Garantia e política">
      <div className="space-y-4">
        <div className="w-40">
          <TextField
            label="Prazo da garantia (dias)"
            type="number"
            value={garantia.prazoDias}
            onChange={(e) => onUpdate(['prazoDias'], Number(e.target.value))}
          />
        </div>
        <TextArea
          label="Como funciona a garantia?"
          rows={2}
          placeholder="Ex: o aluno pode solicitar reembolso total em até 7 dias, sem precisar justificar..."
          value={garantia.comoFunciona}
          onChange={(e) => onUpdate(['comoFunciona'], e.target.value)}
        />
        <TextField
          label="Como o aluno acessa o produto após comprar?"
          placeholder="Ex: acesso liberado por e-mail em até 5 minutos, direto na área de membros"
          value={garantia.comoAcessa}
          onChange={(e) => onUpdate(['comoAcessa'], e.target.value)}
        />
      </div>
    </Card>
  )
}
