import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import { productData } from './ProductData'
import Title from './Title'


export default function ProductDetail() {


  //const products = productData
  let params = useParams()
  let [ProductDetail, setProductDetail] = useState(null)

  useEffect(()=>{
    let product = productData.find(
      (element) => {return element.id === parseInt(params.id)}
    ) 
    setProductDetail(product)
  },[])




  return (
    <div>
        {
        ProductDetail &&
          <div>
                <Title mainTitle = {"這是"+ ProductDetail.name +"的資料"}/>
                <img src ={process.env.PUBLIC_URL+'/images/'+ProductDetail.image} width = '400px' 
                              alt ={ProductDetail.name + "的圖片"}/><br/>
                <p>{ProductDetail.name}</p>
                <p>${ProductDetail.price}</p>
                <p> {ProductDetail.description}</p>
                <QuantityBtn productInfo={ProductDetail}/>
          </div>}
      <Link to={"/"}>回到産品列表</Link>
    </div>
  
  )}
