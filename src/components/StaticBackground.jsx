const StaticBackground = ({ src, children }) => {
  return (
    <img style={{ position: 'fixed', }} src={src}>
      {children}
    </img>
  )
}

export default StaticBackground