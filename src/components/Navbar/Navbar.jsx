import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="public/svg/logo.png" alt="" /></div>
      <ul className="navbar-links">
        <li className="navbar-link">Inicio</li>
        <li className="navbar-link">Nosotros</li>
        <li className="navbar-link">Cursos</li>
        <li className="navbar-link">Contacto</li>
      </ul>
    </nav>
  )
}

export default Navbar