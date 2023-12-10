import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <ChakraProvider>

        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes> 
        </BrowserRouter>
    
    


    {/* <Example/> */}



    {/* <TestButton
      color ='yellow'
      label ='probando'
      onClickCallback ={() => alert ('Cambiar de color')}
      />
      <ItemCount/> */}
      </ChakraProvider>
  );
}

export default App
