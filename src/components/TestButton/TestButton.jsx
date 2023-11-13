import React, { useState } from 'react'
import PropTypes from 'prop-types';

const TestButton = ({color, label, onClickCallback}) => {
    const [backgroundColor, setBackgroundColor] = useState (color || 'grey')

    const handleClick = () => {
        if(onClickCallback){
            onClickCallback()
        }
        setBackgroundColor('orange')
    }

  return (
    <div>
        <button style={{backgroundColor}}
        onClick={handleClick}>
            {label}
        </button>
    </div>
  )
}
    

TestButton.propTypes = {
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClickCallback: PropTypes.func
}

export default TestButton