import React from 'react';
import Aux from '../../../../hoc/ReactAux';
import classes from './SideDrawer.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if(props.open)
    attachedClasses = [classes.SideDrawer, classes.Open];

  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
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