//rfc
import React from 'react';
import product_styles from './ProductList.module.css';
import {useState, useEffect} from 'react' //React Hook
import {Link} from'react-router-dom'
import Title from './Title';
import QuantityBtn from './QuantityBtn'

export default function ProductList() {
    // let productList = [
    //     {
    //         "id": 1,
    //         "name": "蘋果",
    //         "price": 5,
    //         "image": "apple.png",
    //         "description": "這是 蘋果 的介紹"
    //       },
    //       {
    //         "id": 2,
    //         "name": "橙",
    //         "price": 3,
    //         "image": "orange.png",
    //         "description": "這是 橙 的介紹"
    //       },        {
    //         "id": 3,
    //         "name": "芒果",
    //         "price": 4,
    //         "image": "mengo.png",
    //         "description": "這是 芒果 的介紹"
    //       },        {
    //         "id": 4,
    //         "name": "西瓜",
    //         "price": 20,
    //         "image": "water_melon.png",
    //         "description": "這是 西瓜 的介紹"
    //       },        {
    //         "id": 5,
    //         "name": "藍梅",
    //         "price": 10,
    //         "image": "blueberry.png",
    //         "description": "這是 藍梅 的介紹"
    //       },        {
    //         "id": 6,
    //         "name": "白蘿蔔",
    //         "price": 5,
    //         "image": "white_carrot.png",
    //         "description": "這是 白蘿蔔 的介紹"
    //       },
    // ];

    //let product = '水果'

    let [productList, setProductList] = useState([])


    const [product, setProduct] = useState('水果')
    
    const handleClick = function changeName(){
      setProduct('react')
      console.log(product)
      
    }

    const changeToThree = () => {
      setProduct(3)
      console.log(product)
    }

    const [showProduct, setShowProduct] = useState(true)
    const [showProductText, setShowProductText] = useState('顯示産品')

    function MyComponent() {
      if (showProduct === false){
        setShowProduct(true)
        setShowProductText('隱藏産品')
      }
      else{
        setShowProduct(false)
        setShowProductText('顯示産品')
      }
      console.log(showProduct)
    }

    let [input, setInput] = useState('')



    // fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    // .then(response => response.json())
    // .then(data => setProductList(data))

    useEffect(() => {
      // component 每次 render or State 改變
      // 只會在第一次網頁render時會觸發 (如果第二個參數是空的dependency array)
      // Dependency Array是有變數時: 第一次入網頁, 加
      fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
          .then(response => response.json())
          .then(data => setProductList(data))
          .then(console.log(productList))

    },[input])// <== Dependency Array

  return (
    <div>
      <input type="text" onChange = {e=>setInput(e.target.value)}/>
      {/*<h1>{product}</h1>
      <button onClick={handleClick}>張變數值</button>
      <button onClick={changeToThree}>改為3</button>*/}
      <Title  mainTitle = '這是産品的資料'/>
      

      <button onClick={MyComponent}>{showProductText}</button>
      
      
      
     { /*<img src ={process.env.PUBLIC_URL+'/images/apple.png'} width = '100px'/>*/}
      <div>
        {/*for product in productList */
            showProduct && productList.map((product) => {
                return (
                    <div className={product_styles.productBorder} key={product.id}>
                        {product.name}<br/>
                        {product.price}<br/>
                        <Link to={"/product_detail/"+product.id}>
                        <img src ={process.env.PUBLIC_URL+'/images/'+product.image} width = '100px'/><br/>
                        </Link>
                        {product.description}<br/>
                        <QuantityBtn/>

                        <hr></hr>
                    </div>
            )})}
      </div>
    </div>
  )
}
