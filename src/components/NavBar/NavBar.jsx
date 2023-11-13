import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav>

    <div>
        <ul>
          <li>MyLogo</li>
          <li>Cuadros</li>
          <li>Muebles</li>
          <li>Relojes</li>
        </ul>
    </div>

    
    <CartWidget/>
    </nav>
  )
}

export default NavBar