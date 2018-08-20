import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitUpdate } from '../action/updateAction'

class UpdateForm extends Component {
    state = {
        name: this.props.carts.name,
        qty: this.props.carts.qty,
        brand: this.props.carts.brand,
        id: this.props.carts.id
    }
    handleChange = (e) => {
        if(e.target.id === 'qty') {
            this.setState({
            [e.target.id]: parseInt(e.target.value, 10)
            })                        
        } else { 
            this.setState({
            [e.target.id]: e.target.value
            })           
        }       
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.props.submitUpdate(this.state))
        // console.log(this.state)
        this.props.submitUpdate(this.state);
        this.props.history.push('/content');            
    }
    render(){        
        return (
            <div>
                <form onSubmit = { this.handleSubmit }>
                    <label htmlFor = "name">Name: </label>
                    <input type = "text" value = { this.state.name } id = "name" onChange = { this.handleChange }/>
                    <br/> 
                    <label htmlFor = "qty">Quantity: </label>
                    <input type = "text" value = { this.state.qty } id = "qty" onChange = { this.handleChange }/>
                    <br/> 
                    <label htmlFor = "brand">Brand: </label>
                    <input type = "text" value = { this.state.brand } id = "brand" onChange = { this.handleChange }/> 
                    <br/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

const listCart = (state) => {
    return {
      carts: state.updateCarts
    }
}

const submitUpd = (submitU) => {
    return {
      submitUpdate: (state) => submitU(submitUpdate(state))
    }
}

export default connect(listCart, submitUpd)(UpdateForm)
