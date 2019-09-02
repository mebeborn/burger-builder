
import React from 'react';
import classes from './Order.css';

const order = (props) => {

  const ingredients = [];

  for (let igName in props.ingredients) {
    ingredients.push(
      {
        name: igName,
        amount: props.ingredients[igName]
      }
    );
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span
      key={ig.name}
      style={{
        textTransform: 'capitalize',
        padding: '10px',
        margin: '5px',
        border: '1px solid #ccc'
      }}>
      {ig.name} ({ig.amount})
      </span>
  })
  return (
    <div className={classes.Order}>
      <p>{ingredientOutput}</p>
      <h4>Total Price: USD <strong>{props.price.toFixed(2)}</strong></h4>
    </div>
  );
}

export default order;