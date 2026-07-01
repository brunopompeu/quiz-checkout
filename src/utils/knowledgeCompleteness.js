function filled(value) {
  if (typeof value === 'string') return value.trim().length > 0
  if (Array.isArray(value)) return value.length > 0
  return Boolean(value)
}

export function calcCompleteness(kb) {
  const fields = [
    kb.paraQuemE,
    kb.paraQuemNaoE,
    kb.problemaCentral,
    kb.resultadoPrincipal,
    kb.diferencial,
    kb.objecoes.preco.resposta,
    kb.objecoes.preco.roi,
    kb.objecoes.duvida.resposta,
    kb.objecoes.duvida.depoimento,
    kb.objecoes.tempo.resposta,
    kb.objecoes.tempo.cargaHoraria,
    kb.objecoes.tentei.resposta,
    kb.objecoes.tentei.diferenca,
    kb.faq,
    kb.depoimentos,
    kb.garantia.comoFunciona,
    kb.garantia.comoAcessa,
  ]
  const total = fields.length
  const done = fields.filter(filled).length
  return Math.round((done / total) * 100)
}
