import './Marquee.css'

const Marquee = ({ children }) => {
  return (
    <div className='marquee-container'>
      <div className='marquee-text'>
        { children }
      </div>
    </div>
  )
}

export default Marquee