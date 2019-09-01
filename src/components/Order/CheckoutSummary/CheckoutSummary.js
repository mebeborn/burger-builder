import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <p>Hope it will taste !</p>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Success' clicked={props.continueCheckout}>CONFIRM</Button>
      <Button btnType='Danger' clicked={props.cancellCheckout}>CANCEL</Button>
    </div>
  );
}

export default checkoutSummary;