import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart'
import './App.css'
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
