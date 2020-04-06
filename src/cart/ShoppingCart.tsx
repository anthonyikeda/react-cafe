import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import ShoppingContext from '../contexts/ShoppingContext';
import { Button } from '@material-ui/core';
import CartItem from '../contexts/CartItem';

type ShoppingCartProps = {

};

const ShoppingCart: FunctionComponent<ShoppingCartProps> = () => {
    const cartManager = useContext(ShoppingContext);

    useEffect(() => {

    }, []);

    const updateCart = () => {
        let tempStore: CartItem[] = [];
        cartManager?.cartItems.map(item => tempStore.push(item));
        console.log(`Checking out with ${tempStore.length} items`);
    };

    return (
        <div>
            <Button onClick={() => updateCart()}>Checkout</Button>
            <ul>
                {cartManager?.cartItems?.map(item => <li key={item.key}>{item.name}</li>)}
            </ul>
        </div>
    );
};

export default ShoppingCart;
