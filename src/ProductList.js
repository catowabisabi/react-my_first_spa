//rfc
import React from 'react';
import product_styles from './ProductList.module.css';
//import {useState, useEffect} from 'react' //React Hook
import {Link} from'react-router-dom'
import Title from './Title';
import QuantityBtn from './QuantityBtn'
import { productData } from './ProductData';

export default function ProductList() {

    const productList = (productData)
    //let product = '水果'

    //let [productList, setProductList]           = useState([])
    //const [product, setProduct]                 = useState('水果')
    
    // const handleClick = function changeName(){
    //   setProduct('react')
    //   console.log(product)
      
    // }

    // const changeToThree = () => {
    //   setProduct(3)
    //   console.log(product)
    // }

    //const [showProduct, setShowProduct]         = useState(true)
    //const [showProductText, setShowProductText] = useState('顯示産品')

    // function MyComponent() {
    //   if (showProduct === false){
    //     setShowProduct(true)
    //     setShowProductText('隱藏産品')
    //   }
    //   else{
    //     setShowProduct(false)
    //     setShowProductText('顯示産品')
    //   }
    //   console.log(showProduct)
    // }

    //let [input, setInput]                       = useState('')



    // fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    // .then(response => response.json())
    // .then(data => setProductList(data))

    // useEffect(() => {
    //   // component 每次 render or State 改變
    //   // 只會在第一次網頁render時會觸發 (如果第二個參數是空的dependency array)
    //   // Dependency Array是有變數時: 第一次入網頁, 加
    //   fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    //       .then(response => response.json())
    //       .then(data => setProductList(data))
    //       .then(console.log(productList))

    // },[])// <== Dependency Array


  return (
    <div>
      {/*<input type="text" onChange = {e=>setInput(e.target.value)}/>
      <h1>{product}</h1>
      <button onClick={handleClick}>張變數值</button>
      <button onClick={changeToThree}>改為3</button>*/}
      <Title  mainTitle = '這是産品的資料'/>
      {/*<button onClick={MyComponent}>{showProductText}</button>*/}
      
      
     { /*<img src ={process.env.PUBLIC_URL+'/images/apple.png'} width = '100px'/>*/}
      <div>
        {/*for product in productList */
            //showProduct &&
            productList && 
            productList.map((_product) => {
                return (
                    <div className={product_styles.productBorder} key={_product.id}>
                        {_product.name}<br/>
                        {_product.price}<br/>
                        <Link to={"/product_detail/"+_product.id}>
                        <img src ={process.env.PUBLIC_URL+'/images/'+_product.image} width = '100px' alt ={_product.name + "的圖片"}/><br/>
                        </Link>
                        {_product.description}<br/>
                        <QuantityBtn productInfo={_product}/>

                        <hr></hr>
                    </div>
            )})}
      </div>
    </div>
  )
}
