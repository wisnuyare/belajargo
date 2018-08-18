import React, { Component } from 'react';

class AddtoCart extends Component {
    state = {
        name: null,
        qty: null,
        brand: null,
        errors: {},
        message: {}
    }
    handleValidation(){
        let vName = this.state.name;
        let vQty = this.state.qty;
        let vBrand = this.state.brand;
        let errors = {};
        let formIsValid = true;
        let message = {};

        if(!vName){
            formIsValid = false;
            errors["name"] = "error"
            message["name"] = "Name is Empty"
            this.setState({errors: errors, message: message});
        }
        if(!vQty){
            formIsValid = false;
            errors["qty"] = "error"
            message["qty"] = "Quantity is Empty"
            this.setState({errors: errors, message: message});
        }
        if(!vBrand){
            formIsValid = false;
            errors["brand"] = "error"
            message["brand"] = "Brand is Empty"
            this.setState({errors: errors, message: message});
        }
       
       return formIsValid;
    }
    handleChange = (e) => {     
        this.setState({
        [e.target.id]: e.target.value
        })           
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.handleValidation()){
            alert("Form submitted");
            this.props.addtoCart(this.state);
            this.setState({
                name: null,
                qty: null,
                brand: null,
            })
            this.formCart.reset(); 
         }else{
            alert("Form has errors.")
         }   
    }
    handleCheck = (e) => {
        this.props.showAll(e.target.checked)
    }
    render(){
        return (
            <div className = "form-control">
                <form ref={ (el) => this.formCart = el } onSubmit = { this.handleSubmit }>
                    <input type = "checkbox" checked = {this.props.checked} onChange = { this.handleCheck }/>Quantity More Than 10<br/>
                    <label htmlFor = "name">Name: </label>
                    <input className=  { this.state.errors["name"] } type = "text" ref={ (el) => this.inputName = el } id = "name" onChange = { this.handleChange }/>
                    <span className="message">{ this.state.message["name"] }</span>
                    <br/> 
                    <label htmlFor = "qty">Quantity: </label>
                    <input className={ this.state.errors["qty"] } type = "number" ref={ (el) => this.inputQty = el } id = "qty" onChange = { this.handleChange }/>
                    <span className="message">{ this.state.message["qty"] }</span>
                    <br/> 
                    <label htmlFor = "brand">Brand: </label>
                    <input className={ this.state.errors["brand"] } type = "text" ref={ (el) => this.inputBrand = el } id = "brand" onChange = { this.handleChange }/>
                    <span className="message">{ this.state.message["brand"] }</span> 
                    <br/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

export default AddtoCart

