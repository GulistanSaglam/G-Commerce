import React from 'react'
import style from './error.module.css'
import Navbar from '../Navbar/Navbar'

const Error = () => {
  return (
    <div>
        <Navbar/>
        <div className={style.error}>
            <h1>SORRY FOR DECLINE THE ORDER!</h1>
        </div>
    </div>
  )
}

export default Error