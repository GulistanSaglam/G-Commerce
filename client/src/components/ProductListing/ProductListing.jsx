import React from 'react'
import style from './productListing.module.css'
import ProductCard from '../ProductCard/ProductCard'
import products from '../../utils/products';

const ProductListing = () => {
  return (
    <div className={style.container}>
      {products.map((product,id) => (
        <ProductCard key={id} product={product}/>
      ))}
     
    </div>
  )
}

export default ProductListing