import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import TestButton from './components/TestButton/TestButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <NavBar/>
    <ItemListContainer greeting={'Welcome'}/>
    <TestButton
      color ='yellow'
      label ='probando'
      onClickCallback ={() => alert ('Cambiar de color')}
      />
    </>
  )
}

export default App
