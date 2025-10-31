const Navbar = () => {
  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  }

  const navbarEntryStyle = {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px',
    textDecoration: 'none',
    float: 'left',
  }

  return (
    <div>
      <ul style={ulStyle}>
        <li style={navbarEntryStyle}>
          <a href='#'>Home</a>
        </li>
        <li style={navbarEntryStyle}>
          <a href='#projects'>Projects</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar