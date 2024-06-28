import React from 'react'
import style from './productCard.module.css'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Link to={`/products/${product.id}`} className={style.container}>

      <div className={style.imageContainer}>
        <img src={product.image} alt=""></img>
        <Link to={`/products/${product.id}`}>
        <span>+</span>
        </Link>
        
      </div>
      <div className={style.info}>
        <p>{product.title}</p>
        <p>$ {product.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard