import React, {useRef, useState} from 'react'

const Example = () => {
    const[isZoomed, setIsZoomed] = useState(false)

    const productRef = useRef()

    const handleClick = () => {
        if(isZoomed){
            productRef.current.style.transform = 'scale(1)'
        }else{
            productRef.current.style.transform = 'scale(2)'
        }
        setIsZoomed(!isZoomed)
    }
    return (
    <div>

        <img 
        ref={productRef}
        onClick={handleClick} 
        src="https://s1.eestatic.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg">
        </img>
    </div>
    )
}

export default Example