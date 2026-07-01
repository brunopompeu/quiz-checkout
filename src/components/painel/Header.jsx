export default function Header() {
  return (
    <header className="bg-white border-b border-eduzz-border px-8 py-3 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-eduzz-yellow flex items-center justify-center text-eduzz-blue font-extrabold text-sm">
          E
        </div>
        <span className="font-medium text-lg text-eduzz-textDark">MyEduzz</span>
      </div>
      <span className="font-medium text-sm text-eduzz-textDark">Bruno Pompeu</span>
    </header>
  )
}
