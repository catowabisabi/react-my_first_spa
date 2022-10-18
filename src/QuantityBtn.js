import React from 'react'
import {useState} from 'react'


export default function QuantityBtn() {

    let [numInCart, setNumInCart] = useState(0)

    const handleAdd = () =>{
      setNumInCart(numInCart+1)
    }
    const handleSubtract = (num) =>{
      setNumInCart(numInCart-1)
    }

  return (
    numInCart === 0 ? 
    <button onClick={handleAdd}>加入購物車</button> 
    :  
    <div>
        <button onClick={handleSubtract}>-</button>{numInCart}件<button onClick={handleAdd}>+</button>
    </div>
  )
}
