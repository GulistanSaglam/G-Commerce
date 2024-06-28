import React from 'react'
import style from './success.module.css'
import Navbar from '../Navbar/Navbar'

const Success = () => {
  return (
    <div>
        <Navbar/>
        <div className={style.success}>
            <h1>THANK YOU FOR THE PURCHASE!</h1>
        </div>
    </div>
  )
}

export default Success