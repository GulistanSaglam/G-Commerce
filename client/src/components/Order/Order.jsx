import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './order.module.css'
import OrderCard from '../OrderCard/OrderCard'
import { useSelector, useDispatch } from 'react-redux'
import { resetCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'
import { selectUser } from '../../redux/userSlice'


const Order = () => {
  const products = useSelector((state) => state.cart.products);

  const subtotal = () => {
    let subtotal = 0;
    products.forEach((product) => (subtotal += product.quantity * product.price));
    return subtotal.toFixed(2);
  }

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  const handleCheckout = async() => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({products: products})
    }).then((response) =>{
      return response.json();
    }).then((response) => {
      if(response.url){
        window.location.assign(response.url)
      }
    })
  }

  return (
    <div>
        <Navbar/>
        <div className={style.container}>
          <h3>YOUR SHOPPİNG CART</h3>
      {products?.map((product, id) => (
        <OrderCard key={id} product={product}/>
      ))}

      { products.length > 0 ? (
        <div className={style.reset}>
           <button onClick={() => dispatch(resetCart())}>Reset Cart</button>
         </div>
      ) : (
        <p className={style.emptyCart}> YOUR SHOPPING CART IS EMPTY !</p>
      )}
         
        
     { products.length > 0 && (
      <>
          <div className={style.subtotal}>
               <p>SUBTOTAL:</p>
               <p> $ {subtotal()}</p>
         </div>
      
      {user && (
         <div className={style.checkout}>
            <button className={style.checkBtn} onClick={handleCheckout}>
            GO TO CHECKOUT
            </button>
       </div>
      )}
       
     
           {!user && (
           <div className={style.checkout}>
           <Link to="/signin" className={style.checkBtn}>
            SIGNIN FOR CHECKOUT
           </Link>
            </div>
           )}
      
     </>
     )}
      
       
    </div>
    </div>
  )
}

export default Order