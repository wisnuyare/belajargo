import React, {Component} from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom';

class Navbar extends Component {
  render(){
   return (<div>
     <nav className="navbar navbar-default">
     <div className="container-fluid">
     <div className="navbar-header">
       <Link className="navbar-brand" to="/apicheck">Homepage</Link>
     </div>
     <ul className="nav navbar-nav">
       <li><NavLink to="/addtocart">Add To Cart</NavLink></li>
       <li><NavLink to="/content">Carts</NavLink></li>
     </ul>
     </div>
     </nav>
   </div>)
 }
}

export default withRouter(Navbar);