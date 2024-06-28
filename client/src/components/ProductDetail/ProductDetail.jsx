import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import style from './productDetail.module.css'
import { useParams} from 'react-router-dom'
import products from '../../utils/products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState();

  const handleDecrement = () => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  }

  const handleIncrement = () => {
    setQuantity((prev) => (prev + 1))
  }

  const handleSelectSize = (e) => {
     setSize(e.target.value);
  }
  console.log(size);
  // console.log(quantity);
  const dispatch = useDispatch();


  return (
    <div>
      <Navbar/>

      <div className={style.container}>

         <div className={style.care}>
            <p>MATERIALS CARE</p>
            <span>Protect your clothes, protect the environment
                  Low-temperature and low-cycle washing helps preserve the color, 
                  shape and fabric structure of clothes, making them more delicate. 
                  It also reduces energy consumption in maintenance processes.</span>
            </div>


         <div className={style.imageContainer}>
            <img src={product.image} alt="" className={style.image}/> 
         </div>
        
         <div className={style.info}>
          <p>{product.title}</p>
          <p>$ {product.price}</p>

          <div className={style.extraInfo}>
            <span> STOCK STATUS IN THE STORE</span>
            <span>SHIPPING, EXCHANGES AND RETURNS</span>
          </div>

          <div className={style.sizeInfo}>
            <select onChange={handleSelectSize}>
            <option value="null" className={style.size}></option>
              <option value="small" className={style.size}>SMALL</option>
              <option value="medium" className={style.size}>MEDIUM</option>
              <option value="large" className={style.size}>LARGE</option>
            </select>
          </div>

          <div className={style.increaseDecrease}>
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>

          <button onClick={() => dispatch(addToCart({
            id:product.id,
            title:product.title,
            image: product.image,
            price: product.price,
            category: product.category,
            quantity,
            size
          }))}>ADD TO CART</button>
         </div>
         
      </div>
    </div>
  )
}

export default ProductDetail