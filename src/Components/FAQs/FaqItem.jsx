/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../CSS/Faqs.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({ faq }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq" onClick={() => setIsOpen(!isOpen)}>
        <h4>{faq.question}</h4>
        <div className="toggle" style={{ backgroundColor: isOpen && '#0067FF', color: isOpen && 'white', border: isOpen && 'none', transition: isOpen && 'all 0.25s ease-in-out'}}>{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen && <div>
        <p className="faq-content">{faq.content}</p>
      </div>}

    </div>
  )
}

export default FaqItem