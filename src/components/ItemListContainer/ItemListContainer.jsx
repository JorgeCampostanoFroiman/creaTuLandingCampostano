import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <Flex justify={'center'} align={'center'} marginTop={'10px'} borderRadius={'10px'} bg={'skyblue'} h={'35vh'}> 
            <Box>
                <Heading _hover={{color:"white"}} font>{greeting}</Heading>
            </Box>
        </Flex>
  )
}

export default ItemListContainer