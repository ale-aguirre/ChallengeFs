import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import  NavAnim  from '../components/ui/NavAnim'
import { ProductScreen } from '../components/products/ProductScreen'
import { Home } from '../components/home/Home'
import useForm from '../components/hooks/useForm'
import useCoin from '../components/hooks/useCoin'

export const DasboardRoutes = () => {
    return (
        <>
            <NavAnim/>
            <div className="container mt-2">
                <Switch>
                    
                    <Route exact path="/products" component={Home} />
                    <Route exact path="/crud" component={useForm} />
                    <Route exact path="/exchange" component={useCoin} />
                    <Route exact path="/product/:productId" component={ProductScreen} />
                    <Redirect to="/products"/>
                </Switch>
            </div>
        </>
    )
}
