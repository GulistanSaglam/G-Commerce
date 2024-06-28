import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.newsletter}>
        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3> 
        <input type='text' placeholder='' className={style.newsletterInput}/>
        </div>

        <div className={style.connection}>
          <p>TIKTOK</p>
          <p>INSTAGRAM</p>
          <p>FACEBOOK</p>
          <p>X</p>
          <p>PINTEREST</p>
          <p>YOUTUBE</p>
          <p>SHOPIFY</p>
        </div>
        <div className={style.rights}>
          <p>2024, ALL RIGHTS RESERVED.</p>
          <p>MADE BY GULISTAN SAGLAM</p>
        </div>
    </div>
  )
}

export default Footer