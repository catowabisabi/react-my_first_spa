//rfc

import React from 'react'

export default function ProductList() {
    let productList = [
        {
            "id": 1,
            "name": "蘋果",
            "price": 5,
            "image": "apple.png",
            "description": "這是 蘋果 的介紹"
          },
          {
            "id": 2,
            "name": "橙",
            "price": 3,
            "image": "orange.png",
            "description": "這是 橙 的介紹"
          },        {
            "id": 3,
            "name": "芒果",
            "price": 4,
            "image": "mengo.png",
            "description": "這是 芒果 的介紹"
          },        {
            "id": 4,
            "name": "西瓜",
            "price": 20,
            "image": "water_melon.png",
            "description": "這是 西瓜 的介紹"
          },        {
            "id": 5,
            "name": "藍梅",
            "price": 10,
            "image": "blueberry.png",
            "description": "這是 藍梅 的介紹"
          },        {
            "id": 6,
            "name": "白蘿蔔",
            "price": 5,
            "image": "white_carrot.png",
            "description": "這是 白蘿蔔 的介紹"
          },
    ]
  return (
    <div>
      <h1>請選擇要購買的水果</h1>
     { /*<img src ={process.env.PUBLIC_URL+'/images/apple.png'} width = '100px'/>*/}
      <div>
        {/*for product in productList */
            productList.map((product) => {
                return (
                    <div key={product.id}>
                        {product.name}<br/>
                        {product.price}<br/>
                        <img src ={process.env.PUBLIC_URL+'/images/'+product.image} width = '100px'/><br/>
                        {product.description}<br/>
                        <hr></hr>
                    </div>
            )})}
      </div>
    </div>
  )
}
