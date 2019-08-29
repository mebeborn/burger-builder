import React from 'react';
import Logo from '../../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default toolbar;