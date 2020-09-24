import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Navegacion from '../Navegacion/Navegacion';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Navegacion}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
