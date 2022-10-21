import React from 'react';
import  styles from './card.module.css';

const Card = (props) => {
    let {product}=props
  return (
    <div className= {styles.main} >
        <img src= {product.img} alt='product'/>
        <p><h2>{product.Title}</h2></p>
        <p><h3> Rate: {product.Rating}/5 </h3></p>
        <p> <h3> Price: ${product.Price} </h3></p>
        <p> {product.Description} </p>
        <button className={styles.btn2}>Book Now</button>

      </div>
  )
}

export default Card