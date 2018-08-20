import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendID } from '../action/cartAction';

class Carts extends Component{    
    render(){        
        const { carts } = this.props
        const cartList = carts.length ? (
            carts.map(cart => {
            return (
                <div className="center" key={cart.id}>
                    <div> Name : {cart.name} </div>
                    <div> Quantity : {cart.qty} </div>
                    <div> Brand : {cart.brand} </div>
                    <button onClick = {() => {let x = 1; this.props.sendID(cart.id, x)}}>Delete</button>
                    <button onClick = {() => {
                        this.props.history.push('/updateForm'); let x = 2; this.props.sendID(cart.id, x)}}>Update</button>
                    <br/>
                </div>
            )
        })
        ) : (
            <div className="center">Your Cart is Empty</div>
        )

        return(
            <div className="cart-list">
                {cartList}
            </div>
        )
    }
}


const listCart = (state) => {
    return {
      carts: state.carts
    }
}

const send = (sID) => {
    return {
      sendID: (id, x) => sID(sendID(id,x))
    }
}


Carts.propTypes = {
   carts: PropTypes.arrayOf(PropTypes.shape({
       qty: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired,
       brand: PropTypes.string.isRequired
   }))
};
export default connect(listCart, send)(Carts)

