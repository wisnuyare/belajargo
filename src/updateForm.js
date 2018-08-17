import React, { Component } from 'react';

class UpdateForm extends Component {
    state = {
        name: this.props.name,
        qty: this.props.qty,
        brand: this.props.brand,
        id: this.props.id
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
        this.setState({
            id: this.props.id
        })        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitUpdate(this.state);            
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

export default UpdateForm