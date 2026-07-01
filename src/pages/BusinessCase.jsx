export default function BusinessCase() {
  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Hero */}
      <div className="bg-eduzz-blue text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eduzz-lightblue inline-block" />
            Business Case · Quiz no Checkout
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Recuperando receita perdida<br />no abandono de checkout
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Em 2026, 92,6% das tentativas de compra na Eduzz são abandonadas antes de concluir o pagamento.
            O Quiz no Checkout é a intervenção que transforma esse abandono em oportunidade.
          </p>
        </div>
      </div>

      {/* KPIs from Databricks */}
      <div className="bg-slate-900 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Dados internos — Databricks · Jan–Jul 2026
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Kpi label="Taxa de abandono" value="92,6%" sub="média 2026" highlight />
            <Kpi label="Transações abandonadas" value="4,42M" sub="de 4,78M totais" />
            <Kpi label="Ticket médio abandonado" value="R$ 174,65" sub="por transação" />
            <Kpi label="Abandonos / mês" value="631.648" sub="média mensal" />
          </div>

          <div className="mt-6 border-t border-slate-700 pt-6">
            <p className="text-slate-400 text-sm leading-relaxed">
              A taxa de abandono cresceu de{' '}
              <span className="text-white font-semibold">90,15% em janeiro</span> para{' '}
              <span className="text-red-400 font-semibold">97,59% em julho</span> (parcial), com tendência de
              aceleração. O ticket médio de abandono variou entre R$ 159,82 e R$ 182,61.
            </p>
          </div>
        </div>
      </div>

      {/* Revenue at stake */}
      <div className="bg-eduzz-alertBg border-y border-eduzz-alertBorder py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div>
            <p className="text-xs font-semibold text-eduzz-alertRed uppercase tracking-widest mb-1">Receita em risco</p>
            <p className="text-3xl font-bold text-eduzz-textDark">R$ 110,3 M<span className="text-lg font-normal text-slate-500">/mês</span></p>
            <p className="text-sm text-slate-500 mt-1">
              631.648 abandonos × R$ 174,65 = receita potencial não convertida
            </p>
          </div>
          <div className="flex gap-4">
            <RecoveryCard pct="2%" value="R$ 2,2M" color="bg-amber-100 text-amber-800" />
            <RecoveryCard pct="5%" value="R$ 5,5M" color="bg-emerald-100 text-emerald-800" />
            <RecoveryCard pct="10%" value="R$ 11M" color="bg-eduzz-blue text-white" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* Problem */}
        <Section icon="🔍" label="O Problema" title="Por que os compradores abandonam?">
          <p className="text-slate-600 leading-relaxed mb-6">
            A grande maioria dos abandonos acontece por dúvidas não respondidas: o produto é para mim? Vale o preço?
            Tenho garantia? O comprador chega ao checkout com intenção de compra, mas sai sem respostas — e sem comprar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProblemCard icon="❓" title="Dúvidas sobre o produto" desc="O comprador não sabe se o produto resolve o seu problema específico." />
            <ProblemCard icon="💸" title="Insegurança sobre o preço" desc="Sem contexto de valor, o preço parece alto e a compra não se justifica." />
            <ProblemCard icon="🔒" title="Falta de confiança" desc="Sem prova social ou garantia clara, o risco percebido supera o benefício." />
          </div>
        </Section>

        {/* Solution — Buyer */}
        <Section icon="🛒" label="Solução · Comprador" title="Quiz no Checkout — o que muda para quem compra">
          <p className="text-slate-600 leading-relaxed mb-6">
            Quando o comprador demonstra intenção de sair (exit-intent) ou fica inativo por mais de 30 segundos,
            um quiz conversacional personalizado é exibido. A IA usa o knowledge base do produto para responder
            dúvidas em tempo real, apresentar depoimentos e reforçar a garantia — tudo sem sair da tela de pagamento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard icon="🎯" title="Gatilhos inteligentes" desc="Exit-intent e inatividade detectados automaticamente, acionando o quiz no momento certo." />
            <FeatureCard icon="🤖" title="Respostas personalizadas por IA" desc="A IA usa as informações do produto (FAQs, objeções, depoimentos) para responder de forma relevante." />
            <FeatureCard icon="💬" title="Tom e linguagem do produto" desc="O quiz reflete a identidade do produto — formal, casual ou técnico — definido pelo produtor." />
            <FeatureCard icon="🔁" title="Fluxo não interruptivo" desc="O comprador pode fechar o quiz e voltar ao checkout sem perder o progresso do formulário." />
          </div>
        </Section>

        {/* Solution — Producer */}
        <Section icon="⚙️" label="Solução · Produtor (MyEduzz)" title="Edição do produto — o que muda para quem vende">
          <p className="text-slate-600 leading-relaxed mb-6">
            No painel MyEduzz, o produtor ganha uma seção dedicada para configurar o quiz. Em poucos minutos,
            ele fornece o contexto que a IA precisa para responder com propriedade: informações do produto,
            objeções comuns, FAQs e depoimentos. Quanto mais completo, mais eficaz o quiz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard icon="📝" title="Knowledge base do produto" desc="Campos para público-alvo, diferenciais, tom de voz e posicionamento de preço." />
            <FeatureCard icon="🙋" title="Objeções mapeadas" desc="O produtor cadastra as principais objeções e as respostas recomendadas para a IA." />
            <FeatureCard icon="⭐" title="Depoimentos e prova social" desc="Depoimentos importados da Eduzz ou adicionados manualmente para reforçar conversão." />
            <FeatureCard icon="✅" title="FAQ personalizado" desc="Perguntas frequentes respondidas de forma consistente para todos os compradores." />
          </div>

          <div className="mt-6 bg-eduzz-bubble border border-blue-100 rounded-xl p-5">
            <p className="text-sm font-semibold text-eduzz-blue mb-2">Indicador de completude</p>
            <p className="text-sm text-slate-600">
              Um score de preenchimento (0–100%) mostra ao produtor o quanto o quiz está preparado.
              Produtos com score acima de 70% têm substancialmente mais contexto disponível para a IA,
              o que se traduz em respostas mais precisas e maior taxa de recuperação.
            </p>
          </div>
        </Section>

        {/* Impact estimate */}
        <Section icon="📈" label="Impacto esperado" title="Projeção de recuperação de receita">
          <p className="text-slate-600 leading-relaxed mb-6">
            Com base em benchmarks de soluções conversacionais no checkout (Drift, Intercom, Gorgias),
            a expectativa conservadora é de 2–5% de recuperação dos abandonos interceptados pelo quiz.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                  <th className="text-left px-4 py-3">Cenário</th>
                  <th className="text-right px-4 py-3">Taxa de recuperação</th>
                  <th className="text-right px-4 py-3">Transações recuperadas/mês</th>
                  <th className="text-right px-4 py-3">Receita adicional/mês</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <ImpactRow label="Conservador" pct="2%" txn="12.633" rev="R$ 2,2M" />
                <ImpactRow label="Base" pct="5%" txn="31.582" rev="R$ 5,5M" highlight />
                <ImpactRow label="Otimista" pct="10%" txn="63.165" rev="R$ 11M" />
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            * Baseado em 631.648 abandonos/mês com ticket médio de R$ 174,65. Percentual incide sobre abandonos
            interceptados pelo quiz (exit-intent + inatividade), estimados em ~40–60% do total.
          </p>
        </Section>

        {/* Why now */}
        <Section icon="⏱️" label="Por que agora?" title="A taxa de abandono está acelerando">
          <p className="text-slate-600 leading-relaxed mb-4">
            A taxa de abandono saiu de 90,15% em janeiro para 97,59% em julho — uma deterioração de 7,4 pontos
            percentuais em sete meses. A cada mês sem intervenção, mais receita é perdida de forma permanente.
          </p>
          <div className="grid grid-cols-7 gap-1 items-end h-24 mt-6">
            {[
              { month: 'Jan', pct: 90.15 },
              { month: 'Fev', pct: 91.2 },
              { month: 'Mar', pct: 92.4 },
              { month: 'Abr', pct: 93.1 },
              { month: 'Mai', pct: 94.8 },
              { month: 'Jun', pct: 96.2 },
              { month: 'Jul', pct: 97.59, partial: true },
            ].map(({ month, pct, partial }) => {
              const h = Math.round(((pct - 88) / 12) * 100)
              return (
                <div key={month} className="flex flex-col items-center gap-1">
                  <span className="text-xs font-semibold text-eduzz-textDark">{pct.toFixed(1)}%</span>
                  <div
                    className={`w-full rounded-t transition-all ${partial ? 'bg-eduzz-alertRed/60' : 'bg-eduzz-blue'}`}
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-xs text-slate-400">{month}{partial ? '*' : ''}</span>
                </div>
              )
            })}
          </div>
          <p className="text-xs text-slate-400 mt-2">* Julho parcial</p>
        </Section>

        {/* Footer CTA */}
        <div className="bg-eduzz-blue rounded-2xl p-8 text-white text-center">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">Próximos passos</p>
          <h3 className="text-2xl font-bold mb-3">Valide o protótipo, então construa</h3>
          <p className="text-white/70 max-w-xl mx-auto text-sm">
            Os dois protótipos nesta ferramenta demonstram a experiência do comprador no checkout e a tela
            de configuração do produtor no MyEduzz. Colete feedback antes de iniciar o desenvolvimento.
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs font-semibold">
              Protótipo 1 — Comprador (checkout)
            </span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs font-semibold">
              Protótipo 2 — Produtor (MyEduzz)
            </span>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 pb-4">2026 © Eduzz — Todos os direitos reservados</p>
      </div>
    </div>
  )
}

function Section({ icon, label, title, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base">{icon}</span>
        <span className="text-xs font-semibold text-eduzz-blue uppercase tracking-widest">{label}</span>
      </div>
      <h2 className="text-2xl font-bold text-eduzz-textDark mb-5">{title}</h2>
      {children}
    </div>
  )
}

function Kpi({ label, value, sub, highlight }) {
  return (
    <div>
      <p className="text-xs text-slate-400 mb-1">{label}</p>
      <p className={`text-3xl font-bold ${highlight ? 'text-eduzz-lightblue' : 'text-white'}`}>{value}</p>
      <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
    </div>
  )
}

function RecoveryCard({ pct, value, color }) {
  return (
    <div className={`rounded-xl px-4 py-3 text-center ${color}`}>
      <p className="text-xs font-semibold opacity-70">recuperação {pct}</p>
      <p className="text-lg font-bold">{value}<span className="text-xs font-normal">/mês</span></p>
    </div>
  )
}

function ProblemCard({ icon, title, desc }) {
  return (
    <div className="border border-slate-200 rounded-xl p-4">
      <p className="text-xl mb-2">{icon}</p>
      <p className="text-sm font-semibold text-eduzz-textDark mb-1">{title}</p>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-eduzz-pageBg border border-slate-200 rounded-xl p-4 flex gap-3">
      <span className="text-xl shrink-0">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-eduzz-textDark mb-1">{title}</p>
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ImpactRow({ label, pct, txn, rev, highlight }) {
  return (
    <tr className={highlight ? 'bg-eduzz-bubble font-semibold' : ''}>
      <td className="px-4 py-3 text-slate-700">
        {label}
        {highlight && <span className="ml-2 text-xs bg-eduzz-blue text-white rounded-full px-2 py-0.5">base</span>}
      </td>
      <td className="px-4 py-3 text-right text-slate-700">{pct}</td>
      <td className="px-4 py-3 text-right text-slate-700">{txn}</td>
      <td className={`px-4 py-3 text-right font-bold ${highlight ? 'text-eduzz-blue' : 'text-slate-700'}`}>{rev}</td>
    </tr>
  )
}
