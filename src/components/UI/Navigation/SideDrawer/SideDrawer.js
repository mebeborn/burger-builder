import React from 'react';
import Aux from '../../../../hoc/ReactAux';
import classes from './SideDrawer.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../Backdrop/Backdrop';

const sideDrawer = (props) => {
  return (
    <Aux>
      {/* <BackDrop show={props.open} clicked={props.closed} /> */}
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer;