import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    console.log(products)
  return (
    <div style={{display:'flex'}}>
        {products.map((products) => (
            <div key={products.id}>
                <Item {...products} />
                </div>
        ))}
    </div>
  )
}

export default ItemList