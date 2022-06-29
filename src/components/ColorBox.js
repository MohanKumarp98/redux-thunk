import React from 'react'

function ColorBox(props) {
   
  return (
   
        <div className='colors' style={{backgroundColor:props.color}}></div>
 
  )
}

export default ColorBox