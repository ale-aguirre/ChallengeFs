import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Navbar } from '../components/ui/NavBar'
import { ProductScreen } from '../components/products/ProductScreen'
import { Home } from '../components/home/Home'

export const DasboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/products" component={Home} />
                    <Route exact path="/product/:productId" component={ProductScreen} />
                    <Redirect to="/products"/>
                </Switch>
            </div>
        </>
    )
}
