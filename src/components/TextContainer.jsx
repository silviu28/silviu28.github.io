import { useRef } from 'react'
import './TextContainer.css'
import useOnScreen from '../utils/useOnScreen'

const TextContainer = ({ children }) => {
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)

  return (
    <div className={`text-container ${isVisible ? 'fading' : ''}`}
      ref={ref}>
      {children}
    </div>
  )
}

export default TextContainer