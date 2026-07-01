import { useState } from 'react'
import Header from '../components/painel/Header'
import Sidebar from '../components/painel/Sidebar'
import TopBar from '../components/painel/TopBar'
import HeaderBlock from '../components/painel/blocks/HeaderBlock'
import GatilhosBlock from '../components/painel/blocks/GatilhosBlock'
import SobreProdutoBlock from '../components/painel/blocks/SobreProdutoBlock'
import ObjecoesBlock from '../components/painel/blocks/ObjecoesBlock'
import FaqBlock from '../components/painel/blocks/FaqBlock'
import DepoimentosBlock from '../components/painel/blocks/DepoimentosBlock'
import GarantiaBlock from '../components/painel/blocks/GarantiaBlock'
import PreviewBlock from '../components/painel/blocks/PreviewBlock'
import QuizModal from '../components/quiz/QuizModal'
import { defaultKnowledgeBase } from '../data/defaultKnowledgeBase'
import { calcCompleteness } from '../utils/knowledgeCompleteness'
import { setPath } from '../utils/immutableSet'

export default function PrototipoProdutor() {
  const [kb, setKb] = useState(defaultKnowledgeBase)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [savedToast, setSavedToast] = useState(false)

  function update(path, value) {
    setKb((prev) => setPath(prev, path, value))
  }

  function handleSave() {
    setSavedToast(true)
    setTimeout(() => setSavedToast(false), 2500)
  }

  const completeness = calcCompleteness(kb)

  return (
    <div className="min-h-screen flex flex-col bg-eduzz-pageBg font-roboto">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 min-w-0">
          <TopBar />

          <div className="max-w-3xl mx-auto px-8 py-6 space-y-6">
            <HeaderBlock ativo={kb.ativo} onToggle={(v) => update(['ativo'], v)} />

            <GatilhosBlock gatilhos={kb.gatilhos} onUpdate={(path, value) => update(['gatilhos', ...path], value)} />

            <SobreProdutoBlock kb={kb} onUpdate={(path, value) => update(path, value)} />

            <ObjecoesBlock
              objecoes={kb.objecoes}
              onUpdate={(path, value) => update(['objecoes', ...path], value)}
            />

            <FaqBlock faq={kb.faq} onChange={(next) => update(['faq'], next)} />

            <DepoimentosBlock depoimentos={kb.depoimentos} onChange={(next) => update(['depoimentos'], next)} />

            <GarantiaBlock garantia={kb.garantia} onUpdate={(path, value) => update(['garantia', ...path], value)} />

            <PreviewBlock kb={kb} completeness={completeness} onOpenPreview={() => setPreviewOpen(true)} />

            <div className="bg-white border border-eduzz-border rounded p-6 flex items-center justify-between gap-4">
              <p className="text-xs text-slate-400 max-w-md">
                Quanto mais informações você fornecer, mais personalizadas e eficazes serão as respostas da IA.
              </p>
              <button
                onClick={handleSave}
                className="shrink-0 bg-eduzz-blue text-white font-medium rounded px-6 py-3 text-sm hover:brightness-110 transition"
              >
                Salvar configurações
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 pt-4">2026 © Eduzz — Todos os direitos reservados</p>
          </div>
        </div>
      </div>

      {savedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white text-sm font-semibold rounded-xl px-5 py-3 shadow-lg animate-fade-in-up">
          Configurações salvas com sucesso!
        </div>
      )}

      {previewOpen && <QuizModal kb={kb} onClose={() => setPreviewOpen(false)} />}
    </div>
  )
}
