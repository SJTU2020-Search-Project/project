import React from 'react';
import './App.css';
import BasicRoute from "./Router";
import {NavLink,Switch,Route} from "react-router-dom";

/**
 * @return {boolean}
 */
function App() {
  return (
      <div>
          {/*<h1>about</h1>*/}
          {/*<a href='/Router'>W3School</a>*/}
          <BasicRoute/>

          {/*<div>*/}
          {/*    <Switch>*/}
          {/*        <Route path='/BasicRoute' component={BasicRoute}/>*/}
          {/*    </Switch>*/}
          {/*</div>*/}
      </div>

  );
}

export default App;
