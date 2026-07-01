import { useEffect, useRef, useState } from 'react'
import CheckoutMock from '../components/checkout/CheckoutMock'
import QuizModal from '../components/quiz/QuizModal'
import { defaultKnowledgeBase } from '../data/defaultKnowledgeBase'

export default function PrototipoComprador({ kb = defaultKnowledgeBase, standalone = true }) {
  const [quizOpen, setQuizOpen] = useState(false)
  const triggeredRef = useRef(false)

  function triggerQuiz() {
    if (triggeredRef.current) return
    triggeredRef.current = true
    setQuizOpen(true)
  }

  useEffect(() => {
    if (!standalone) return

    function handleMouseMove(e) {
      if (kb.gatilhos.exitIntent && e.clientY <= 8) triggerQuiz()
    }

    let inactivityTimer
    function resetInactivity() {
      clearTimeout(inactivityTimer)
      if (!kb.gatilhos.inatividade) return
      inactivityTimer = setTimeout(triggerQuiz, kb.gatilhos.inatividadeSegundos * 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousemove', resetInactivity)
    window.addEventListener('keydown', resetInactivity)
    resetInactivity()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', resetInactivity)
      window.removeEventListener('keydown', resetInactivity)
      clearTimeout(inactivityTimer)
    }
  }, [kb, standalone])

  function handleCloseQuiz() {
    setQuizOpen(false)
  }

  function handleReopen() {
    triggeredRef.current = false
    setQuizOpen(true)
    triggeredRef.current = true
  }

  return (
    <div className="relative">
      <CheckoutMock />

      {standalone && (
        <button
          onClick={handleReopen}
          className="fixed bottom-5 right-5 z-40 bg-eduzz-blue text-white text-xs font-semibold rounded-full px-4 py-3 shadow-lg hover:brightness-110 transition"
        >
          Simular gatilho de saída
        </button>
      )}

      {quizOpen && <QuizModal kb={kb} onClose={handleCloseQuiz} />}
    </div>
  )
}
