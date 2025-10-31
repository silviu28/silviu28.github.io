import './FadingIn.css'
const FadingIn = ({ children }) => {
  return (
    <div className='fade-in'>
      { children }
    </div>
  )
}

export default FadingIn