import React from "react";

import "../styles/header.style.css";
import { IoSunny } from "react-icons/io5";
const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>TODO</h1>
      <button className='theme-toggle'>
        {/* <img
          src='./assets/images/icon-sun.svg'
          alt='light-theme'
          className='theme-toggle__icon theme-toggle__icon--light active'
        />
        <img
          src='./assets/images/icon-moon.svg'
          alt='dark-theme'
          className='theme-toggle__icon theme-toggle__icon--dark'
        /> */}
        <IoSunny />
      </button>
    </header>
  );
};

export default Header;
