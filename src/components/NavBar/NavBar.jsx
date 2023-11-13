import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav>

    <h3>title</h3>
    <div>
        <button>muebles</button>
        <button>cuadros</button>
        <button>relojes</button>
    </div>
    <CartWidget/>
    </nav>
  )
}

export default NavBar