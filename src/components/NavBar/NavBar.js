import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const menu = document.getElementById('menu')
  const navOptions = document.querySelectorAll('.nav-option')

  const toggleMenu = () => {
    menu.classList.toggle("change");
    navOptions.forEach(option => option.classList.toggle("hidden"))
  }

  return (
    <nav className="nav-bar">
      <div className="container" id="menu" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="nav-links-container">
        <NavLink to="/home" className="nav-option hidden" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/quiz" className="nav-option hidden" onClick={toggleMenu}>
          Quiz
        </NavLink>
        <NavLink to="/resources" className="nav-option hidden" onClick={toggleMenu}>
          Resources
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar;
