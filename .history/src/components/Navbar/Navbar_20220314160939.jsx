import React from 'react';
import { GiHumbergerMenu } from 'react-icons/gi';
import { MdOutlineRestaurant } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <image src={images.gericht} alt="app logo" />
    </div>
    Navbar
  </nav>
);

export default Navbar;
