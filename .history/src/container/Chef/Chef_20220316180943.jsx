import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
    </div>

    <div className="app__chef-content">
      <div className="app__chef-content_quote">
        <img src={images.quote} alt="quote" />
        <p className="p__opensans">We believe in healthy and quality food.Considering that health is wealth</p>
      </div>
      <p className="p__opensans">Italian Delicacise, Asian dishes, African Qiusine We deliver your expections</p>
    </div>

    <div className="app__chef-signs">
      <p className="p__opensans">Satoshi Leuo</p>
      <p className="p__opensans">Chef & Founder</p>

    </div>

  </div>
);

export default Chef;
