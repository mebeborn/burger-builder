import React from 'react';
import Aux from '../../hoc/ReactAux';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';

import classes from './Layout.css'

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  )
}

export default layout;