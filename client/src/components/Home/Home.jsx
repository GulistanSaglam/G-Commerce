import React from 'react'
import style from './Home.module.css'
import Navbar from '../Navbar/Navbar'


const Home = () => {
  return (
  <div className={style.container}>
   <Navbar />
 
    <div className={style.home}>
    </div>
    </div>
  )
}

export default Home