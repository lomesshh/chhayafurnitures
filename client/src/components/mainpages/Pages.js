import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? Login : Login} />
            <Route path="/register" exact component={isLogged ? Register : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : Categories} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : CreateProduct} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : CreateProduct} />

            <Route path="/history" exact component={isLogged ? OrderHistory : OrderHistory} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : OrderDetails} />

            <Route path="/cart" exact component={Cart} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
