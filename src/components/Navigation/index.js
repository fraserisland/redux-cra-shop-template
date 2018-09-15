import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import './styles.css'

const Navigation = (props) => {
    
    const cartQuantity = (cart) => {
        let quantity = 0
        cart.map((item) => {
            quantity += item.quantity
        })
        return quantity
    }
   
    return (  
        <nav>
            <div className="navbar__holder">
                <p><NavLink className="navbar__link" to="/">home</NavLink></p>
                <p><NavLink className="navbar__link" to="/cart">cart ({cartQuantity(props.cart)})</NavLink></p>
                <p><NavLink className="navbar__link" to="/about">about</NavLink></p>
            </div>
        </nav>
    );
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
 
export default connect(mapStateToProps)(Navigation);