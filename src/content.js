import React, { Component } from 'react';

class Carts extends Component{
    render(){
        const { carts } = this.props
        const cartList = carts.map( cart => {
            return this.props.checked === true ? (cart.qty > 10 ? (
                <div className="cart" key={cart.id}>
                    <div> Name : {cart.name} </div>
                    <div> Quantity : {cart.qty} </div>
                    <div> Brand : {cart.brand} </div>
                    <button onClick = {() => {this.props.deleteCart(cart.id)}}>Delete</button>
                    <br/>
                </div>
            ) : null) : (
                <div className="cart" key={cart.id}>
                    <div> Name : {cart.name} </div>
                    <div> Quantity : {cart.qty} </div>
                    <div> Brand : {cart.brand} </div>
                    <button onClick = {() => {this.props.deleteCart(cart.id)}}>Delete</button>
                    {this.props.updateId === null ? (<button onClick = {() => {this.props.updateCart(cart.id)}}>Update</button>) : null}
                    <br/>
                </div>
            )
        });

        return(
            <div className="cart-list">
                {cartList}
            </div>
        )
    }
}

export default Carts