import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Flex, Box, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import logo from '../../assets/Lorem.jpg';
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/'>
        <h3>Inicio</h3>
      </Link>
      <div className='Categorias'>
        <NavLink to={`/category/minijuegos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mini Juegos</NavLink>
      </div>
      <CartWidget/>
    </nav>
   
  )
}

export default NavBar