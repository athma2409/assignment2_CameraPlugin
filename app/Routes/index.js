import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Product from '../Pages/Product';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Invoice from '../Pages/Invoice';


const Route = createStackNavigator(
    {
     
            Product: Product,
            Cart:Cart,
            Home:Home,
            Invoice:Invoice

    
    },
    {
        initialRouteName: "Home"
    },
    
);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;