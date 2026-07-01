import { Card, TextArea } from '../ui'

const FIELDS = [
  {
    key: 'paraQuemE',
    label: 'Para quem é esse produto?',
    placeholder:
      'Ex: empreendedores iniciantes que querem vender online, mas não têm experiência com tráfego pago...',
  },
  {
    key: 'paraQuemNaoE',
    label: 'Para quem NÃO é?',
    placeholder:
      'Ex: não é indicado para quem já fatura acima de R$50k/mês ou para quem busca resultados em menos de 30 dias...',
  },
  {
    key: 'problemaCentral',
    label: 'Qual problema central ele resolve?',
    placeholder: 'Ex: o comprador não consegue atrair clientes sem depender de indicação ou anúncio caro...',
  },
  {
    key: 'resultadoPrincipal',
    label: 'Qual o principal resultado que o aluno alcança?',
    placeholder: 'Ex: conseguir os primeiros clientes orgânicos em até 60 dias seguindo o método...',
  },
  {
    key: 'diferencial',
    label: 'O que diferencia esse produto dos outros no mercado?',
    placeholder:
      'Ex: é o único com método validado para negócios locais com menos de 5 funcionários, com suporte semanal ao vivo...',
  },
]

export default function SobreProdutoBlock({ kb, onUpdate }) {
  return (
    <Card title="Sobre o produto" subtitle="O que a IA precisa saber para contextualizar as respostas">
      <div className="space-y-4">
        {FIELDS.map((field) => (
          <TextArea
            key={field.key}
            label={field.label}
            placeholder={field.placeholder}
            value={kb[field.key]}
            onChange={(e) => onUpdate([field.key], e.target.value)}
          />
        ))}
      </div>
    </Card>
  )
}
