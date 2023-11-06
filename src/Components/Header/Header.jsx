import React from 'react';
import './header.css';
import BurgerButton from '../Buttons/Burger/BurgerButton';

const Header = () => {
  return (
    <div className='header_content'>
        <div className='burger_button'>
            <BurgerButton />
            <p>EN | FR</p>
        </div>
        <div className='page_logo'><p>La Paris</p></div>
        <div className='book_now'><button>Book Now</button></div>
    </div>
  )
}

export default Header;