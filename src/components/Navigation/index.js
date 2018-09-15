import React from 'react';
import { NavLink } from 'react-router-dom'

import './styles.css'

const Navigation = () => {
    return (  
        <nav>
            <div className="navbar__holder">
                <p><NavLink className="navbar__link" to="/"> home </NavLink></p>
                <p><NavLink className="navbar__link" to="/cart"> cart </NavLink></p>
                <p><NavLink className="navbar__link" to="/about"> about </NavLink></p>
            </div>
        </nav>
    );
}
 
export default Navigation;