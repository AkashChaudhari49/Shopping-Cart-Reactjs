import React from 'react';
import "../styles/navbar.css";

const Navbar = ({size, setShow}) => {
  return (
    <nav>
      <div className='nav-box'>
        <span className='my-shop'onClick={()=>setShow(true)}>
          My Shopping
        </span>
        <div className='cart' onClick={()=>setShow(false)}>
          <span className='my-cart'>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>


      </div>
    </nav>

  )
}

export default Navbar;