import React from 'react'
import {useState, useContext} from 'react'
import { CartContext } from './CartContext'



export default function QuantityBtn({productInfo}) {

    //===========================================================================================Use Context
    const {cartItems, setCartItems} = useContext(CartContext)
    //===========================================================================================Use Context

    //===========================================================================================Find Index
    let productIndexInCart = cartItems.findIndex(
      //findIndex//如果係購物車內找到相同的index, 佢會返回個個index內既object 既index, 如果無就會返-1
      (element)=>{return element.id === productInfo.id}
      )
    //===========================================================================================Find Index
    
    //===========================================================================================Use State - 設定起始值的成立條件
    let [numInCart, setNumInCart] = useState(
      productIndexInCart === -1 ? 0 : cartItems[productIndexInCart].quantity)
    //===========================================================================================Use State - 設定起始值的成立條件

    //===========================================================================================更改購物車數值, 有條件
    const handleAdd = () =>{
      if (productIndexInCart === -1){
            setCartItems([
              {
                id:           productInfo.id,
                name:         productInfo.name,
                image:        productInfo.image,
                price:        productInfo.price,
                description:  productInfo.description,
                quantity:     1
              },
              ...cartItems]) //呢度係用黎加返之前個array係個底個度
            }

      else{
              let newCartArray = [...cartItems]
              newCartArray[productIndexInCart].quantity++
              setCartItems(newCartArray)
            }

        setNumInCart(numInCart+1)
      }

    const handleSubtract = () =>{
      if (cartItems[productIndexInCart].quantity === 1){
        let newCartArray = [...cartItems]
        newCartArray.splice(productIndexInCart, 1)
        setCartItems(newCartArray)
      }else{
        let newCartArray = [...cartItems]
        newCartArray[productIndexInCart].quantity = newCartArray[productIndexInCart].quantity - 1
        setCartItems(newCartArray)
        
      }
      setNumInCart(numInCart-1)
    }

  return (
    <div>
      
        {numInCart === 0 ? 
          <button onClick={handleAdd}>加入購物車</button>:  
          <div><button onClick={handleSubtract}>-</button>{numInCart}件<button onClick={handleAdd}>+</button></div>}
    </div>
  )
}
