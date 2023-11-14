import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Flex, Box, Link, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import logo from '../../assets/Lorem.jpg';

const NavBar = () => {
  return (

    <Flex align="center" bg='lightsalmon' p='20px' borderRadius={'10px'}>
      <Box p="2" >
                <Heading color="white">
                <img src={logo} width={'10%'} alt="Logo" />
                </Heading>
            </Box>
            
            <Box  display="flex" alignItems="center" pos={'relative'} right={'100px'}>

                <Link color="white" m={'20px'}>
                <Button>Inicio</Button>
                </Link>

                <Menu width="220px">
                <MenuButton as={Button} m={'20px'} width="230px"  justifyContent={'center'} >
                    Categorías
                </MenuButton>
                <MenuList  >
                    <MenuItem justifyContent={'center'} _hover={{color:"green"}}>Cuadros</MenuItem>
                    <MenuItem justifyContent={'center'} _hover={{color:"green"}}>Portallaves</MenuItem>
                    <MenuItem justifyContent={'center'} _hover={{color:"green"}}>Percheros</MenuItem>
                    <MenuItem justifyContent={'center'} _hover={{color:"green"}}>Muebles</MenuItem>
                    <MenuItem justifyContent={'center'} _hover={{color:"green"}}>Relojes</MenuItem>
                </MenuList>
                </Menu>

                <Button  m={'20px'}>
              <CartWidget bg='white'/>
              </Button>
                
                
            </Box>
            
    </Flex>
  )
}

export default NavBar