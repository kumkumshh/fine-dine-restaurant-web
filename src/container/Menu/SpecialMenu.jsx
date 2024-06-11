import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Non-Alcoholic Beverages</p>
        <div className="app__specialMenu_menu_items">
          {data.nonAlcoholic.map((nonAlcoholic, index) => (
            <MenuItem key={nonAlcoholic.title + index} title={nonAlcoholic.title} price={nonAlcoholic.price} tags={nonAlcoholic.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Alcoholic Beverages</p>
        <div className="app__specialMenu_menu_items">
          {data.alcoholic.map((alcoholic, index) => (
            <MenuItem key={alcoholic.title + index} title={alcoholic.title} price={alcoholic.price} tags={alcoholic.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;