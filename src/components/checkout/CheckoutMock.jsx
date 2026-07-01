import { defaultKnowledgeBase } from '../../data/defaultKnowledgeBase'

function Field({ label, placeholder, children, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-xs text-gray-600 mb-1">{label}</label>
      {children ?? (
        <input
          type="text"
          disabled
          placeholder={placeholder}
          className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-400 bg-white placeholder:text-gray-300 outline-none"
        />
      )}
    </div>
  )
}

const CARD_BRANDS = [
  { label: 'AMEX', bg: '#016FD0' },
  { label: 'DC', bg: '#004B87' },
  { label: 'elo', bg: '#111' },
  { label: 'HIPER', bg: '#E31837' },
  { label: 'MC', bg: '#EB001B' },
  { label: 'VISA', bg: '#1A1F71' },
]

const PAYMENT_TABS = [
  { icon: '💳', label: 'Cartão de Crédito', active: true },
  { icon: '⬛', label: 'Pix', active: false },
  { icon: '📋', label: 'Boleto', active: false },
  { icon: '💳', label: 'Múltiplos cartões', active: false },
]

function ProductThumb({ size = 16 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-yellow-400 flex items-center justify-center shrink-0"
    >
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size * 0.55, height: size * 0.55 }}>
        <rect x="3" y="5" width="18" height="2.5" rx="1.25" fill="white" />
        <rect x="3" y="10.75" width="18" height="2.5" rx="1.25" fill="white" />
        <rect x="3" y="16.5" width="18" height="2.5" rx="1.25" fill="white" />
      </svg>
    </div>
  )
}

export default function CheckoutMock() {
  const kb = defaultKnowledgeBase
  const priceStr = kb.price.toFixed(2).replace('.', ',')
  const installStr = kb.installmentValue.toFixed(2).replace('.', ',')

  return (
    <div className="min-h-screen bg-gray-50 font-roboto select-none text-gray-800 text-sm">
      {/* Country selector bar */}
      <div className="flex justify-end px-6 py-2 bg-white border-b border-gray-100">
        <button className="flex items-center gap-1.5 text-xs text-gray-600 border border-gray-200 rounded px-2 py-1 bg-white">
          <span>🇧🇷</span>
          <span>Alterar país</span>
          <span className="text-gray-400 text-[10px]">▾</span>
        </button>
      </div>

      {/* Two-column layout */}
      <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-[1fr_260px] gap-8">

        {/* ── LEFT: form ── */}
        <div>
          {/* Product header */}
          <div className="flex items-start gap-3 mb-6">
            <ProductThumb size={56} />
            <div className="leading-snug">
              <p className="font-semibold text-gray-900 text-sm">{kb.productName}</p>
              <p className="text-xs text-gray-500 mt-1">Por apenas</p>
              <p className="text-lg font-bold" style={{ color: '#E05A00' }}>
                <span className="text-sm font-normal text-gray-700">{kb.installments}x de R$</span>{' '}
                {installStr}
              </p>
              <p className="text-xs text-gray-500">ou R$ {priceStr} à vista</p>
              <a href="#" className="flex items-center gap-1 text-xs text-blue-500 mt-1">
                <span>🏷️</span> Possui cupom de desconto?
              </a>
            </div>
          </div>

          {/* Personal data */}
          <div className="space-y-3">
            <Field label="Nome Completo" placeholder="Digite seu nome completo" />
            <Field label="CPF ou CNPJ" placeholder="Digite o CPF ou CNPJ" />
            <Field label="E-mail" placeholder="Digite o e-mail para receber o conteúdo" />
            <Field label="Confirme seu E-mail" placeholder="Confirme o e-mail para receber o conteúdo" />

            {/* DDI + phone */}
            <div className="flex gap-2">
              <Field label="DDI" className="w-28">
                <div className="flex items-center gap-1.5 rounded border border-gray-200 px-2 py-2 bg-white text-xs text-gray-600">
                  <span>🇧🇷</span>
                  <span>+55</span>
                  <span className="text-gray-400 text-[10px] ml-0.5">▾</span>
                </div>
              </Field>
              <Field label="Celular" placeholder="Digite o celular" className="flex-1" />
            </div>

            <div className="flex justify-end items-center gap-1 text-xs text-gray-500">
              <svg className="w-3 h-3 text-green-600" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1a4 4 0 0 1 4 4v1h.5A1.5 1.5 0 0 1 14 7.5v6A1.5 1.5 0 0 1 12.5 15h-9A1.5 1.5 0 0 1 2 13.5v-6A1.5 1.5 0 0 1 3.5 6H4V5a4 4 0 0 1 4-4zm0 1.5A2.5 2.5 0 0 0 5.5 5v1h5V5A2.5 2.5 0 0 0 8 2.5z" />
              </svg>
              <span>Seus dados estão protegidos</span>
            </div>
          </div>

          {/* Payment section */}
          <div className="mt-6">
            <p className="font-bold text-xs tracking-wider text-gray-700 mb-3">FORMAS DE PAGAMENTO</p>

            {/* Combine toggle */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-5 rounded-full bg-gray-200 relative flex-shrink-0">
                <div className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow-sm" />
              </div>
              <span className="text-xs text-gray-600">Combinar formas de pagamento</span>
              <span
                className="text-[10px] font-bold text-white rounded-full px-2 py-0.5"
                style={{ background: '#F59E0B' }}
              >
                Novidade
              </span>
            </div>

            {/* Payment tabs */}
            <div className="flex gap-2 flex-wrap mb-3">
              {PAYMENT_TABS.map((tab) => (
                <button
                  key={tab.label}
                  className={`flex items-center gap-1.5 text-xs rounded border px-3 py-1.5 bg-white ${
                    tab.active
                      ? 'border-gray-500 text-gray-800 font-medium'
                      : 'border-gray-200 text-gray-500'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Card brand icons */}
            <div className="flex gap-1.5 mb-4">
              {CARD_BRANDS.map((b) => (
                <div
                  key={b.label}
                  className="rounded px-1.5 py-0.5 text-[9px] font-bold text-white"
                  style={{ background: b.bg }}
                >
                  {b.label}
                </div>
              ))}
            </div>

            {/* Card fields */}
            <div className="space-y-3">
              <Field label="Número do Cartão" placeholder="1234 4567 8901 2345" />
              <Field label="Nome impresso no cartão" placeholder="Nome como está no cartão" />

              <div className="flex gap-3">
                <Field label="Validade" placeholder="MM/AA" className="flex-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs text-gray-600">Código de segurança</label>
                    <span className="w-4 h-4 rounded-full border border-blue-400 text-blue-400 text-[10px] flex items-center justify-center cursor-pointer">
                      i
                    </span>
                  </div>
                  <input
                    type="text"
                    disabled
                    placeholder="123"
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-gray-400 bg-white placeholder:text-gray-300 outline-none"
                  />
                </div>
              </div>

              {/* Installments */}
              <Field label="Parcelas">
                <div className="flex items-center justify-between rounded border border-gray-200 px-3 py-2 bg-white text-sm text-gray-700 cursor-pointer">
                  <span>
                    {kb.installments}x R$ {installStr} *
                  </span>
                  <span className="text-gray-400 text-xs">▾</span>
                </div>
              </Field>

              {/* Save data */}
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">Usar esses dados nas próximas compras</span>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-6">
            <p className="font-bold text-xs tracking-wider text-gray-700 mb-2">RESUMO DA COMPRA</p>
            <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-semibold text-gray-700" colSpan={2}>
                    Produto
                  </td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <ProductThumb size={28} />
                      <span className="text-gray-700">{kb.productName}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-right text-gray-700 font-medium whitespace-nowrap">
                    R$ {priceStr}
                  </td>
                </tr>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td className="px-3 py-2 font-semibold text-gray-700">Forma de Pagamento</td>
                  <td className="px-3 py-2 text-right font-semibold text-gray-700">Valor</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-3 py-2 text-gray-600">Cartão 1</td>
                  <td className="px-3 py-2 text-right text-gray-600">
                    {kb.installments}x de R$ {installStr}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <button className="w-full mt-5 rounded py-3.5 text-sm font-semibold text-white tracking-wide" style={{ background: '#0D2772' }}>
            Pagar e Receber Agora
          </button>

          {/* Footer */}
          <div className="mt-5 text-center text-xs text-gray-500">
            <p className="mb-4">
              *Sua compra possui acréscimo de até 3,49% a.m. para pagamento parcelado.
            </p>

            <div className="flex justify-center gap-8 mb-4">
              {[
                { icon: '🏠', line1: 'Compra', line2: '100% Segura' },
                { icon: '🔒', line1: 'Privacidade', line2: 'Protegida' },
                { icon: '🔐', line1: 'GoDaddy', line2: 'Verificado e protegido' },
              ].map((b) => (
                <div key={b.line1} className="flex flex-col items-center gap-0.5">
                  <span className="text-base">{b.icon}</span>
                  <span className="text-[10px] leading-tight text-center">
                    {b.line1}
                    <br />
                    {b.line2}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mb-2">
              <a href="#" className="text-blue-500">Política de privacidade</a>
              <a href="#" className="text-blue-500">Termos de compra</a>
            </div>

            <p className="text-gray-400 mb-3">
              Esse site é protegido pelo reCAPTCHA e Google{' '}
              <a href="#" className="text-blue-500">Política de privacidade</a>
              {' '}»{' '}
              <a href="#" className="text-blue-500">Termos de serviço</a>.
            </p>

            <div className="flex justify-center items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                  <rect x="3" y="5" width="18" height="2.5" rx="1.25" fill="white" />
                  <rect x="3" y="10.75" width="18" height="2.5" rx="1.25" fill="white" />
                  <rect x="3" y="16.5" width="18" height="2.5" rx="1.25" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-sm" style={{ color: '#0D2772' }}>eduzz</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: seller sidebar ── */}
        <div className="pt-2">
          <p className="text-xs text-gray-500 mb-1">Oferecido por:</p>
          <p className="font-semibold text-gray-900 text-sm">Bruno Pompeu</p>
          <p className="text-xs text-gray-500 mb-5">bruno.pompeu@eduzz.com</p>

          <div className="space-y-3">
            {[
              kb.resultadoPrincipal,
              kb.diferencial,
              kb.problemaCentral,
              kb.paraQuemE.slice(0, 80) + '...',
            ].map((text, i) => (
              <p key={i} className="text-xs text-gray-600 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
