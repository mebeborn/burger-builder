import React from 'react';
import Logo from '../../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuButton from '../../MenuButton/MenuButton';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <MenuButton clicked={props.show}/>
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default toolbar;