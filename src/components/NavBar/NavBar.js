import { NavLink } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';

const NavBar = ({ resetScore }) => {

  const toggleMenu = () => {
    const menuButton = document.getElementById('menu-button')
    const nav = document.getElementById('nav-container')

    menuButton.classList.toggle("change")
    const newMenuOpenStatus = menuButton.classList.contains("change")
    menuButton.setAttribute("aria-expanded", newMenuOpenStatus)
    nav.classList.toggle("hidden")
  }

  return (
    <div className="nav-bar">
      <button
        className="container"
        id="menu-button"
        onClick={toggleMenu}
        aria-labelledby="nav-container"
        aria-expanded="false"
        aria-label="Toggle the navigation menu"
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      <nav className="nav-links-container hidden" id="nav-container" aria-label="Main menu">
        <NavLink to="/home" className="nav-option" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/quiz" className="nav-option" onClick={() => {
          toggleMenu()
          resetScore()
        }}>
          Quiz
        </NavLink>
        <NavLink to="/resources" className="nav-option" onClick={toggleMenu}>
          Resources
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar;

NavBar.propTypes = {
  resetScore: PropTypes.func
};
