function lowerFirst(text) {
  if (!text) return ''
  return text.charAt(0).toLowerCase() + text.slice(1)
}

function buildObjecaoBlock(kb, answers) {
  const { obstaculo, obstaculoDetalhe } = answers
  const objecoes = kb.objecoes

  switch (obstaculo) {
    case 'preco':
      return `Sei que o investimento é algo real pra se pensar. Mas veja: ${objecoes.preco.roi} Parcelado em ${kb.installments}x de R$ ${kb.installmentValue.toFixed(2).replace('.', ',')}, o ${kb.productName} custa menos do que muita assinatura por aí — só que aqui o retorno é direto pro seu negócio.`
    case 'duvida':
      return `Entendo a dúvida — é a pergunta mais comum de quem chega até aqui. ${
        objecoes.duvida.depoimento
          ? `Olha o que aconteceu com quem estava numa situação parecida com a sua: "${objecoes.duvida.depoimento}"`
          : 'O método já foi aplicado por alunos com o mesmo tipo de negócio que o seu, com resultado real.'
      }`
    case 'tempo':
      return `Sem problema: o acesso é vitalício e você estuda no seu próprio ritmo, sem prazo de expiração. A carga é de apenas ${objecoes.tempo.cargaHoraria} — cabe na rotina de quem já tem um negócio pra cuidar.`
    case 'tentei':
      return `Faz todo sentido essa desconfiança depois de já ter tentado antes e não ter funcionado. A diferença aqui é clara: ${objecoes.tentei.diferenca}`
    case 'outra':
    default:
      return `Essa é uma ótima pergunta${
        obstaculoDetalhe ? `: "${obstaculoDetalhe}"` : ''
      }. Fica tranquilo que respondemos isso (e outras dúvidas comuns) na seção de perguntas frequentes, aqui embaixo.`
  }
}

export function buildResultado(kb, answers) {
  const { dor, tentativa, sonho } = answers

  const espelho = `Você me disse que ${lowerFirst(dor)}. Também contou que, na tentativa de resolver isso, ${lowerFirst(
    tentativa,
  )} — e que o que você quer é: ${lowerFirst(sonho)}. Eu entendo exatamente esse momento.`

  const conexao = `${kb.productName} foi criado pra quem está exatamente onde você está. É muito comum quem chega até aqui enfrentar isso: ${lowerFirst(
    kb.problemaCentral,
  )} Aqui, o foco é claro: ${lowerFirst(kb.resultadoPrincipal)}`

  const objecao = buildObjecaoBlock(kb, answers)

  return { espelho, conexao, objecao }
}
