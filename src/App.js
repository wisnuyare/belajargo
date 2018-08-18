import React, { Component } from 'react';
import Carts from './content';
import AddtoCart from './addtocart';
import UpdateForm from './updateForm';
import './App.css'


class App extends Component {
  state = {
    carts : [
      { name: 'Brio', qty: 15, brand: 'Honda', id: 1},
      { name: 'Yaris', qty: 20, brand: 'Toyota', id: 2 },
      { name: 'Swift', qty: 5, brand: 'Suzuki', id: 3 }
    ],
    checked : false,
    updateId : null
  }
  addtoCart = (cart) => {
    cart.id = this.state.carts.length+1
    let carts = [...this.state.carts, cart];
    this.setState({
      carts: carts
    });
  }
  showAll = (checked) => {
    this.setState({
      checked : checked
    })
  }
  deleteCart = (id) =>{
    let carts = this.state.carts.filter(carts => {
      return carts.id !== id
    });
    this.setState({
      carts: carts
    });
  }
  updateCart = (id) =>{
    this.setState({
      updateId: id
    })
  }
  submitUpdate = (cart) =>{
    let carts = this.state.carts.filter(carts => {
      return carts.id !== cart.id
    });
    let cartsReal = [...carts, cart]
    let cartsSort = cartsReal.sort((start,end)=>{return start.id - end.id})
    this.setState({
      carts: cartsSort,
      updateId: null
    });    
  }
  render() {
    return (
      <div className="App">
        {this.state.updateId !== null ? 
          (<UpdateForm 
            submitUpdate = {this.submitUpdate}
            name = {this.state.carts[this.state.updateId-1].name}
            qty = {this.state.carts[this.state.updateId-1].qty}
            brand = {this.state.carts[this.state.updateId-1].brand}
            id = {this.state.updateId}
          />): null}
        <Carts carts = { this.state.carts } checked = { this.state.checked } deleteCart = { this.deleteCart } updateCart = {this.updateCart} updateId = { this.state.updateId }/>
        <AddtoCart addtoCart = { this.addtoCart } showAll = { this.showAll } checked = { this.state.checked }/>
      </div>      
    );
  }
}

export default App;

