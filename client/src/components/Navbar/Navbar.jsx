import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../redux/userSlice';
const Navbar = () => {
  
  const products = useSelector((state) => state.cart.products);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
         <div className={style.left}>
          <h1><Link to='/' className={style.name}> G-COMMERCE</Link></h1>
             <div className={style.category}>
              <Link to="/products" className={style.women}><p>WOMEN</p></Link>
              <p>MEN</p>
              <p>CHILDREN</p>
             </div>
         </div>

         <div className={style.right}>
          {!user && (
           <Link className={style.signup} to='/signin'>
           <p>SIGNIN</p>
           </Link>
          )}
        
        { user && (
          <Link className={style.signup} to='/' onClick={() => dispatch(logout())}>
          <p>LOGOUT</p>
          </Link>
        )}

          
          
         <Link to='/order'>
           <RiShoppingCart2Line size={20} color='black'/>
           <span>{products.length}</span>
         </Link> 
         </div>

         
    </div>
  )
}

export default Navbar