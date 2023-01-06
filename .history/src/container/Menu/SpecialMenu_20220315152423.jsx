import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu Thats Fits Your Pallate" />
      <h1 className='heatext__comorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
      </div>
      <div className='app__specialMenu_menu_item'>
        {data.wines.map((wine, index) => (
          <p>{wine.title}</p>
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_img">
      <img src={images.menu} alt="menu img"  />
    </div>
    
  </div>
);

export default SpecialMenu;
