import React from 'react'
import {useParams, Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import Title from './Title'

export default function ProductDetail() {

    let params = useParams()

  return (
    <div>
    
      <div>
        <Title mainTitle = '這是産品的資料'/>
        #{params.id} 産品資料
        <QuantityBtn/>
      </div>

      <Link to={"/"}>回到産品例表</Link>
    </div>
  
  )}
