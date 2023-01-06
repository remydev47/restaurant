import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu Thats Fits Your Pallate" />
      <h1 className='heatext__comorant'>Todays Special</h1>
    </div>
  </div>
);

export default SpecialMenu;
