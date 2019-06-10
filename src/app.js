import React, { Fragment } from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Home from './components/home.jsx';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
