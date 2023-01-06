import React from 'react';
import { SubHeading } from '../../components';

import { images } from "../../constants"
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
          Geritch is a perfect haven for both business and leisure travellers. At Stanley, we strive to provide guests with an experience that’s beyond all expectation. It all begins with our friendly staff, who will do everything they can to make your stay relaxing and enjoyable. The team at Sarova Stanley looks forward to welcoming you in one of our luxury rooms where you will experience comfort and convenience in this beautiful city of Nairobi.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
