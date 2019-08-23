import React from 'react';
import BurgerIngridient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type={'bread-top'}></BurgerIngridient>
      <BurgerIngridient type={'cheese'}></BurgerIngridient>
      <BurgerIngridient type={'bacon'}></BurgerIngridient>
      <BurgerIngridient type={'bread-bottom'}></BurgerIngridient>
    </div>
  )
}
export default burger;