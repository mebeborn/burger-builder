import React from 'react';
import icon from '../../../assets/images/menu32.png';
import clases from './MenuButton.css';

const menuButton = (props) => {
  return (
    <div onClick={props.clicked} className={clases.MenuButton}>
      <img src={icon} alt="Burger Icon"/>
    </div>
  );
}

export default menuButton;