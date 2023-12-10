import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getProductById, getProductsByCategory, getProducts } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({title}) => {

  const [products, setProducts] = useState([])
  
  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)  
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])

  
  return (
    <Flex justify={'center'} align={'center'} m={4}
    // marginTop={'10px'} borderRadius={'10px'} bg={'skyblue'} h={'35vh'}
    >  
            <Box>
                <Heading font>{title}</Heading>
            </Box>
            <Box>
            <ItemList products={products} />
            </Box>
            
        </Flex> 
  )
}

export default ItemListContainer