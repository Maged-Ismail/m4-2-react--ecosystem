import React from 'react';
import { BrowserRouter as Router,
          Switch,
          Route } 
from 'react-router-dom';

import {items} from '../data';
import ItemDetails from './ItemDetails';
import Homepage from './Homepage';
import Aboutpage from './Aboutpage';


function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
            <Homepage itemList = {items}/>
        </Route>
        <Route exact={true} path="/about">
          <Aboutpage/>
          </Route>
        <Route exact={true} path="/items/:itemId">
          <ItemDetails/>
          </Route>
      </Switch>
    </Router>
    )
}

export default App;
