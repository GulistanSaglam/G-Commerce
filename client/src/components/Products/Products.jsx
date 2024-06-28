import React from 'react'
import style from './products.module.css'
import Navbar from '../Navbar/Navbar'
import ProductListing from '../ProductListing/ProductListing'
import FilteringButtons from '../FilteringButtons/FilteringButtons'

const Products = () => {
  return (
    <div className={style.container}>
      <Navbar/>
      <section className={style.productSection}>
      <FilteringButtons/>
      <ProductListing/>
      </section>
    </div>
  )
}

export default Products