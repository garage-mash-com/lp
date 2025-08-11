import { useState } from 'react'

interface FaqItemProps {
  question: string
  answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleOpen}>
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default FaqItem
