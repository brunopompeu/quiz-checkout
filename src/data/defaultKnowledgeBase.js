export const defaultKnowledgeBase = {
  productName: 'Marketing Digital para Pequenos Negócios',
  price: 297,
  installments: 12,
  installmentValue: 29.7,

  paraQuemE:
    'Empreendedores iniciantes que já têm um pequeno negócio (loja, salão, consultório, prestação de serviço local) e querem atrair clientes pela internet, mas não têm experiência com tráfego pago nem equipe de marketing.',
  paraQuemNaoE:
    'Não é indicado para quem já fatura acima de R$50k/mês com marketing estruturado, nem para quem busca resultado garantido em menos de 30 dias sem aplicar o método.',
  problemaCentral:
    'O comprador não consegue atrair clientes pelo Instagram sem depender de indicação ou pagar anúncio caro, mesmo postando com frequência.',
  resultadoPrincipal:
    'Conseguir os primeiros clientes chegando de forma orgânica, por conta própria, em até 60 dias seguindo o método.',
  diferencial:
    'É o único método validado especificamente para negócios locais com menos de 5 funcionários, com suporte semanal ao vivo e sem depender de anúncio pago.',

  objecoes: {
    preco: {
      resposta:
        'Mostrar o parcelamento em 12x, calcular o retorno com apenas 1 cliente novo por mês e comparar com o custo de continuar sem atrair clientes.',
      roi: 'Mesmo 1 novo cliente por mês já paga o curso em menos de 60 dias.',
    },
    duvida: {
      resposta:
        'Citar o número de alunos com perfil parecido (negócio pequeno, sem equipe de marketing), mencionar a garantia de 7 dias e mostrar um depoimento específico.',
      depoimento:
        'Eu não sabia nada de marketing e em 5 semanas já tinha gente me procurando pelo Instagram sem eu ficar pedindo indicação. — Fernanda, dona de salão de beleza',
    },
    tempo: {
      resposta:
        'Mencionar que as aulas são curtas, o acesso é vitalício e o aluno estuda no próprio ritmo, sem prazo de expiração.',
      cargaHoraria: '3 horas por semana',
    },
    tentei: {
      resposta:
        'Diferenciar o método do que o comprador já tentou: não é sobre postar mais, é sobre estratégia de negócio local, não de criador de conteúdo.',
      diferenca:
        'Foca em estratégia de dono de negócio local, não em técnicas genéricas de criador de conteúdo.',
    },
  },

  faq: [
    {
      pergunta: 'Tem certificado?',
      resposta: 'Sim, o certificado é emitido ao concluir 100% do curso.',
    },
    {
      pergunta: 'Por quanto tempo tenho acesso?',
      resposta: 'O acesso é vitalício, incluindo todas as atualizações futuras.',
    },
    {
      pergunta: 'Tem garantia?',
      resposta: 'Sim, 7 dias de garantia incondicional, sem perguntas.',
    },
  ],

  depoimentos: [
    {
      nome: 'Fernanda Alves',
      contexto: 'Dona de salão de beleza, SP',
      texto:
        'Eu não sabia nada de marketing e em 5 semanas já tinha gente me procurando pelo Instagram sem eu ficar pedindo indicação.',
      resultado: 'Conseguiu 12 novos clientes no primeiro mês',
    },
    {
      nome: 'Ricardo Souza',
      contexto: 'Personal trainer, Belo Horizonte',
      texto:
        'Parei de depender de indicação. Hoje 4 de cada 10 alunos novos chegam pelo Instagram, sem eu pagar nada de anúncio.',
      resultado: '4 em cada 10 clientes novos vêm do orgânico',
    },
  ],

  garantia: {
    prazoDias: 7,
    comoFunciona:
      'O aluno pode solicitar reembolso total em até 7 dias após a compra, sem precisar justificar o motivo.',
    comoAcessa:
      'O acesso é liberado automaticamente por e-mail em até 5 minutos após a confirmação do pagamento, direto na área de membros.',
  },

  gatilhos: {
    exitIntent: true,
    inatividade: true,
    inatividadeSegundos: 45,
    botaoVoltar: true,
  },

  ativo: true,
}

export const respostasSimuladasComprador = {
  dor: 'Não consigo atrair clientes pelo Instagram sem pagar anúncio',
  tentativa: 'Já tentei postar todo dia por 3 meses, não vi resultado nenhum',
  sonho: 'Ter clientes chegando por conta própria, sem depender de indicação',
  obstaculo: 'duvida',
}

export const obstaculoOptions = [
  { id: 'preco', emoji: '💰', label: 'O preço ainda me preocupa' },
  { id: 'duvida', emoji: '🤔', label: 'Não sei se funciona pra minha situação' },
  { id: 'tempo', emoji: '⏰', label: 'Não tenho certeza se terei tempo' },
  { id: 'tentei', emoji: '😔', label: 'Já tentei outros cursos e não tive resultado' },
  { id: 'outra', emoji: '❓', label: 'Tenho uma dúvida específica' },
]
