import './Badge.css'

const Badge = ({ src }) => {
  return (
    <div className='badge-outer'>
      <img src={src} />
    </div>
  )
}

export default Badge