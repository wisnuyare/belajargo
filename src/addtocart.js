import React, { Component } from 'react';

class AddtoCart extends Component {
    state = {
        name: null,
        qty: null,
        brand: null,
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
        this.props.addtoCart(this.state);
        this.setState({
            name: null,
            qty: null,
            brand: null,
        })
        document.getElementById("formCart").reset();    
    }
    handleCheck = (e) => {
        this.props.showAll(e.target.checked)
    }
    render(){
        return (
            <div>
                <form id = "formCart" onSubmit = { this.handleSubmit }>
                    <input type = "checkbox" checked = {this.props.checked} onChange = { this.handleCheck }/>Quantity More Than 10<br/>
                    <label htmlFor = "name">Name: </label>
                    <input type = "text" id = "name" onChange = { this.handleChange }/>
                    <br/> 
                    <label htmlFor = "qty">Quantity: </label>
                    <input type = "text" id = "qty" onChange = { this.handleChange }/>
                    <br/> 
                    <label htmlFor = "brand">Brand: </label>
                    <input type = "text" id = "brand" onChange = { this.handleChange }/> 
                    <br/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

export default AddtoCart