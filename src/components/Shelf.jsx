const Shelf = ({ rows, cols, children }) => {
  const style = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    position: 'relative',
  }

  return (
    <div style={style}>
      { children }
    </div>
  )
}

export default Shelf