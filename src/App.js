import React, { Component } from 'react';
import Carts from './content';
import AddtoCart from './addtocart';

class App extends Component {
  state = {
    carts : [
      { name: 'Brio', qty: 15, brand: 'Honda', id: 1},
      { name: 'Yaris', qty: 20, brand: 'Toyota', id: 2 },
      { name: 'Swift', qty: 5, brand: 'Suzuki', id: 3 }
    ],
    checked : false
  }
  addtoCart = (cart) => {
    cart.id = this.state.carts.length+1
    let carts = [...this.state.carts, cart];
    this.setState({
      carts: carts
    });
    console.log(this.state.carts.length)
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
    console.log(carts)
  }
  render() {
    return (
      <div className="App">
        <Carts carts = { this.state.carts } checked = { this.state.checked } deleteCart = { this.deleteCart }/>
        <AddtoCart addtoCart = { this.addtoCart } showAll = { this.showAll } checked = { this.state.checked }/>
      </div>
    );
  }
}

export default App;
