import { Link,NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link to='/'><img src="/svg/logo.png" alt="" /></Link></div>
      <div className='menu'>
        <img src="/svg/menu.svg" alt="menu" />
      </div>
      <ul className="navbar-links">
        <li><NavLink to='/' className="navbar-link">Inicio</NavLink></li>
        <li><NavLink to='/nosotros' className="navbar-link">Nosotros</NavLink></li>
        <li><NavLink to='/servicios' className="navbar-link">Servicios</NavLink></li>
        <li><NavLink to='/contacto' className="navbar-link">Contacto</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar