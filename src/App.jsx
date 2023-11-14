import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import TestButton from './components/TestButton/TestButton';
import ItemCount from './components/ItemCount/ItemCount';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
    <NavBar/>
    <ItemListContainer greeting={'Welcome'}/>
    {/* <TestButton
      color ='yellow'
      label ='probando'
      onClickCallback ={() => alert ('Cambiar de color')}
      />
      <ItemCount/> */}
      </ChakraProvider>
  )
}

export default App
