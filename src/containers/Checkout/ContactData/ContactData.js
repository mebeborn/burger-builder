import React, { Component } from 'react';
import axios from '../../../../src/axios-orders';
import classes from './ContactData.css'
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }

    this.setState({ loading: true, purchasing: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }


    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false })
      });
  }

  changedInputHandler = (event, id) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedElementForm = { ...updatedOrderForm[id] };

    updatedElementForm.value = event.target.value;
    updatedElementForm.valid = this.isValid(updatedElementForm.value, updatedElementForm.validation);
    console.log(updatedElementForm);

    updatedOrderForm[id] = updatedElementForm;

    this.setState({ orderForm: updatedOrderForm });
  }

  isValid(value, rules) {
    let valid = true;
    if (rules.required) {
      valid = value.trim() !== ""  && valid;
    }

    if (rules.minLength) {
      valid = value.length >= rules.minLength && valid;

    }

    if (rules.maxLength) {
      valid = value.length <= rules.minLength  && valid;
    }

    return valid;
  }

  render() {
    let formArrayElements = [];

    for (let key in this.state.orderForm) {
      formArrayElements.push({
        id: key,
        config: { ...this.state.orderForm[key] }
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formArrayElements.map(element => (
          <Input key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            changed={(event) => this.changedInputHandler(event, element.id)} />
        ))}
        <Button btnType='Success'>ORDER</Button>
      </form>
    );

    if (this.state.loading == true) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Type your info</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;