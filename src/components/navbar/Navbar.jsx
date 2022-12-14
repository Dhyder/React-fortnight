import React from 'react';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#fortnight">Fortnight</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

const Authmobile = () => (
  <>
  <div className="fortnight__navbar-menu_container-links-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
  </div>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='fortnight__navbar'>
      <div className="fortnight__navbar-links">
        <div className="fortnight__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="fortnight__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#fortnight">Fortnight</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="fortnight__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="fortnight__navbar-menu">
        {toggleMenu
        ?<RiCloseLine color="white" size={27} onClick={() => setToggleMenu(false)} />
        :<RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="fortnight__navbar-menu_container scale-up-center">
            <div className="fortnight__navbar-menu_container-links">
              <Menu/>
              <Authmobile/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar