import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/'>HOME</NavigationItem>
      <NavigationItem link='/' active>BURGER BUILDER</NavigationItem>
    </ul>
  );
}

export default navigationItems;