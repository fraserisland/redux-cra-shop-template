import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'

const Router = () => (
    <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/about' component={AboutPage} />
    </Switch>
)

export default Router