import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'
import { CartContext } from './CartContext'



export default function Checkout() {

  let cartItem = useContext(CartContext)
  // {
  //   "cartItems":[
  //            {
  //               "id": 4,
  //               "name": "西瓜",
  //               "price": 20,
  //               "image": "water_melon.png",
  //               "description": "這是 西瓜 的介紹",
  //               "quantity" : 3
  //             },        {
  //               "id": 5,
  //               "name": "藍梅",
  //               "price": 10,
  //               "image": "blueberry.png",
  //               "description": "這是 藍梅 的介紹",
  //               "quantity" : 6
  //             }, 

  //   ], 
  //   "userInfo":{
  //       "uid": 201555,
  //       "name": "貓咪神",
  //   }
  // }

  let {cartItems} = cartItem
  let cartEmpty = cartItems.length <= 0 ? true : false

  let grandTotal = cartItems.reduce( 
    (total, product)=>
    {
      return total += product.price * product.quantity
    },0

  )

  const freeShippingPrice   = 99
  const gotFreeShipping     = grandTotal >= freeShippingPrice
  

  return (
    <div>
        <Title  mainTitle = '你的購物車'/>

        {cartEmpty &&
        <div>
          <p>購物車現在沒有商品</p><br />
          <Link to="/">回去購物中心</Link>
        </div>}

          {!cartEmpty &&      
            <div>
              <div id = "cartSection">
                {/*産品例表*/}
                {
                cartItems.map((product)=>(
                  <div key = {product.id}>
                    <img width = '100px' src={process.env.PUBLIC_URL + "/images/" + product.image} alt="" />
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>購買數量{product.quantity}</p>
                    <QuantityBtn productInfo={product}/>

                  </div>
                ))
                }
              </div>
              
              <div id = "checkOutSection">
                {/*價錢總數 + 免費送貨*/}
                <div>全部貨品價錢總共: <span>${grandTotal}</span></div>
                {gotFreeShipping &&
                <div>買滿 ${freeShippingPrice} ! 我們免費送貨</div>
                }

                {!gotFreeShipping &&
                <div>
                <div>如果買滿 ${freeShippingPrice}, 我們可以免費送貨!</div> 
                <div>還差 ${freeShippingPrice - grandTotal}</div>
                </div>
                }

              </div>
            </div>
          }
      
    </div>
  )
}
