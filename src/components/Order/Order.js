
import React from 'react';
import classes from './Order.css';

const order = () => {

  return (
    <div className={classes.Order}>
      <p>Here is your ingredients: Salad(3)</p>
      <h4>Total Price: USD<strong>5.05</strong></h4>
    </div>
  );
}

export default order;