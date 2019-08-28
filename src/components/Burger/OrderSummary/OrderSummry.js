import React from 'react';
import Aux from '../../../hoc/ReactAux';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(el => {
    return <li key={el}>{el}: {props.ingredients[el]}</li>
  });
  return (
    <Aux>
      <h3>Your order:</h3>
      <p>Delicious Burger with:</p>
      <ul>
        <span style={{textTransform: 'capitalize'}}>{ingredientSummary}</span>
      </ul>
    </Aux>
  );
}

export default orderSummary;