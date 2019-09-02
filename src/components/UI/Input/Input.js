import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case ("input"):
      inputElement = <input
        className={classes.InputElement}
        onChange={props.changed}
        {...props.elementConfig}
        value={props.value} />
      break;

    case ("select"):
      inputElement = <select
        onChange={props.changed}
        className={classes.InputElement}>
        {props.elementConfig.options.map(element => (
          <option key={element.value}
            value={element.value}>
            {element.displayValue}
          </option>
        ))}
      </select>
      break;

    default:
      inputElement = <input
        onChange={props.changed}
        className={classes.InputElement}
        {...props.elemetConfig}
        value={props.value}
      />
      break;

  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default input;