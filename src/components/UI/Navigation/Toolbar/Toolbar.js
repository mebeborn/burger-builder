import React from 'react';
import Logo from '../../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <div>Menu</div>
      <NavigationItems />
    </header>
  );
}

export default toolbar;