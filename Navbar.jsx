import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <p>Fights</p>
        <p>Hotels</p>
        <p>Stays</p>
        <p>Car rentals</p>
        <p> Airport Taxis</p>
        <button className={styles.btn}> SignIn </button>
    </div>
  )
}

export default Navbar