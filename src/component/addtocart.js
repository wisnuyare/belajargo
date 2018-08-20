import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtoCart } from '../action/addtoCartAction';

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
    addtoCart = (e) => {
        e.preventDefault();
        if(this.handleValidation()){
            alert("Form submitted");
            this.props.addtoCart(this.state);
            this.setState({
                name: null,
                qty: null,
                brand: null,
            })
            this.props.history.push('/content'); 
        }else{
            alert("Form has errors.")
        }         
    }
    // handleCheck = (e) => {
    //     this.props.showAll(e.target.checked)
    // }
    render(){
        return (
            <div className = "form-control">
                <form onSubmit = {this.addtoCart}>
                    {/* <input type = "checkbox" checked = {this.props.checked} onChange = { this.handleCheck }/>Quantity More Than 10<br/> */}
                    <label htmlFor = "name">Name: </label>
                    <input className=  { this.state.errors["name"] } type = "text" id = "name" onChange = { this.handleChange }/>
                    <span className="message">{ this.state.message["name"] }</span>
                    <br/> 
                    <label htmlFor = "qty">Quantity: </label>
                    <input className={ this.state.errors["qty"] } type = "number" id = "qty" onChange = { this.handleChange }/>
                    <span className="message">{ this.state.message["qty"] }</span>
                    <br/> 
                    <label htmlFor = "brand">Brand: </label>
                    <input className={ this.state.errors["brand"] } type = "text" id = "brand" onChange = { this.handleChange }/>
                    <span className="message">{ this.state.message["brand"] }</span> 
<br/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

const addCart = (deleteC) => {
    return {
      addtoCart: (id) => deleteC(addtoCart(id))
    }
}

export default connect(null, addCart)(AddtoCart)

