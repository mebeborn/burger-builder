import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>BURGER</NavigationItem>
      <NavigationItem link='/orders'>ORDERS</NavigationItem>
    </ul>
  );
}

export default navigationItems;