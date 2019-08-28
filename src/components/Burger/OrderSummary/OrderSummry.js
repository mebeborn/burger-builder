import React from 'react';
import Aux from '../../../hoc/ReactAux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients).map(el => {
    return <li key={el}>{el}: {props.ingredients[el]}</li>
  });
  return (
    <Aux>
      <h3>Your order:</h3>
      <p>Delicious Burger with:</p>
      <ul>
        <span style={{ textTransform: 'capitalize' }}>{ingredientSummary}</span>
      </ul>
      <p><strong>Price: {props.price.toFixed(2)}</strong></p>
      <Button
        clicked={props.orderContinued}
        btnType={'Success'}>
        CONTINUE</Button>
      <Button
        clicked={props.orderCancelled}
        btnType={'Danger'}>
        CANCEL</Button>

    </Aux>
  );
}

export default orderSummary;