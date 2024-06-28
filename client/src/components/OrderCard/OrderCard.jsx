import React from 'react'
import style from './orderCard.module.css'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cartSlice'


const OrderCard = ({product}) => {

  const dispatch = useDispatch();

  return (
    <div className={style.container}>
        <div className={style.info}>
          <img src={product.image} alt="" />
          <div>
            <p>{product.title}</p>
            <p>CATEGORY: {product.category}</p>
            <p>SIZE: {product.size}</p>
          </div>
          </div>

          <div className={style.price}>
            <p>TOTAL PRICE: $ {product.quantity * product.price}</p>
            <p>QUANTITY: {product.quantity}</p>
          </div>

          <div className={style.delete}>
           <button onClick={() => dispatch(removeFromCart(product.id))}>DELETE</button>
          </div>
        </div>

  )
}

export default OrderCard