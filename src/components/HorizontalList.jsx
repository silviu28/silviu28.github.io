import './HorizontalList.css'
const HorizontalList = ({ children }) => {
  return (
    <div>
      <ul>
        { children.map(c => <li key={c.id}>{c}</li>) }
      </ul>
    </div>
  )
}

export default HorizontalList