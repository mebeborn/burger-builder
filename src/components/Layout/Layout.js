import React from 'react';
import Aux from '../../hoc/ReactAux';

const layout = (props) => {
  return (
    <Aux>
      <div>Main, Bar, Toolbar</div>
      <main>props.children</main>
    </Aux>
  )
}

export default layout;