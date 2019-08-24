import React from 'react';
import BurgerIngridient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {

  let transforemdIngredients = Object.keys(props.ingredients)
    .map((ingredient) => {
      return [...Array(props.ingredients[ingredient])].map((_, index) => {
        return <BurgerIngridient type={ingredient} key={ingredient + index} />
      });
    })
    .reduce((arr, ell)=>{
      return arr.concat(ell);
    }, []);

    if(transforemdIngredients.length === 0)
      transforemdIngredients = <p>Please start adding ingredients</p>;

  console.log(transforemdIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type={'bread-top'}></BurgerIngridient>
      {transforemdIngredients}
      <BurgerIngridient type={'bread-bottom'}></BurgerIngridient>
    </div>
  )
}
export default burger;