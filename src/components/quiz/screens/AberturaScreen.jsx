export default function AberturaScreen({ onStart, onExit }) {
  return (
    <div className="p-8 text-center animate-fade-in-up">
      <div className="w-16 h-16 mx-auto rounded-full bg-eduzz-bubble border-2 border-eduzz-lightblue flex items-center justify-center text-3xl mb-5">
        💬
      </div>
      <h2 className="text-xl font-bold text-eduzz-blue mb-2">Espera um segundo...</h2>
      <p className="text-sm text-eduzz-gray leading-relaxed mb-6">
        Antes de sair, posso te fazer uma pergunta rápida? Leva menos de 1 minuto.
      </p>
      <button
        onClick={onStart}
        className="w-full bg-eduzz-yellow text-eduzz-blue font-bold rounded-xl py-3.5 text-sm hover:brightness-95 transition"
      >
        Pode perguntar
      </button>
      <button
        onClick={onExit}
        className="mt-4 text-xs text-eduzz-gray hover:text-slate-600 underline underline-offset-2"
      >
        Não, quero sair
      </button>
    </div>
  )
}
