import React, { useState } from 'react'

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1)

    const incrementarCantidad = () =>{
        setCantidad(cantidad+1)
    }

    const decrementarCantidad = () =>{
        // if(cantidad>0){
        //     setCantidad(cantidad-1)}

        //uso ternario
        cantidad > 1 && setCantidad(cantidad-1)
    }
  return (
    <div>
        <button onClick={incrementarCantidad}>+</button>
        <p>{cantidad}</p>
        <button onClick={decrementarCantidad}>-</button>
    </div>
  )
}

export default ItemCount