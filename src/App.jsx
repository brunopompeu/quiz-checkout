import { useState } from 'react'
import PrototipoComprador from './pages/PrototipoComprador'
import PrototipoProdutor from './pages/PrototipoProdutor'

export default function App() {
  const [view, setView] = useState('produtor')

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center">
        <div className="mt-3 bg-white shadow-lg border border-slate-200 rounded-full p-1 flex gap-1 font-syne">
          <button
            onClick={() => setView('produtor')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              view === 'produtor' ? 'bg-eduzz-blue text-white' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Protótipo 2 — Produtor
          </button>
          <button
            onClick={() => setView('comprador')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              view === 'comprador' ? 'bg-eduzz-blue text-white' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Protótipo 1 — Comprador
          </button>
        </div>
      </div>

      <div className="pt-14">
        {view === 'produtor' ? <PrototipoProdutor /> : <PrototipoComprador />}
      </div>
    </div>
  )
}
