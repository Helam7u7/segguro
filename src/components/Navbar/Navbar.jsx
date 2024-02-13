import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link to='/'><img src="/svg/logo.png" alt="" /></Link></div>
      <ul className="navbar-links">
        <li><Link to='/' className="navbar-link">Inicio</Link></li>
        <li><Link to='/nosotros' className="navbar-link">Nosotros</Link></li>
        <li><Link to='/servicios' className="navbar-link">Servicios</Link></li>
        <li><Link to='/contacto' className="navbar-link">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar