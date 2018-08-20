import React, { Component } from 'react';
import Navbar from './component/navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Carts from './component/content';
import AddtoCart from './component/addtocart';
import UpdateForm from './component/updateForm';
import Apicheck from './component/apicheck';
import NewsEvent from './component/newsevent';
import './App.css'


class App extends Component {
  // showAll = (checked) => {
  //   this.setState({
  //     checked : checked
  //   })
  // }
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route path = '/apicheck' component = {Apicheck} />
        <Route path = '/updateForm' component = { UpdateForm } />
        <Route path = '/content' component = { Carts } />
        <Route path = '/addtocart' component = { AddtoCart } />
        <Route path = '/:check_id' component={NewsEvent} />
        </Switch>
      </div> 
      </BrowserRouter>     
    );
  }
}

export default App;

