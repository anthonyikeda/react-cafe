import React, { useState, createContext, useEffect } from 'react';
import CartItem from './CartItem';

const defaultCartItems: CartItem[] = [];

type ShoppingContextType = {
    cartItems: CartItem[];
    addCartItem: (value: CartItem) => void;
};

const ShoppingContext = createContext<ShoppingContextType|undefined>(undefined);

type ContextProps = {
    children: React.ReactNode,
};

export const ShoppingProvider = ({ children }: ContextProps) => {
    const [localCartItems, setLocalCartItems] = useState(defaultCartItems);

    useEffect(() => {
        setLocalCartItems([]);
    }, []);

    const addItemToCart = (incomingId: CartItem) => {
        console.log(`Adding ${incomingId.name} to cart!`);
        let newItems: CartItem[] = [...localCartItems, incomingId];
        setLocalCartItems(newItems);
    };

    return (
        <ShoppingContext.Provider value={{cartItems: localCartItems, addCartItem: addItemToCart}}>{children}</ShoppingContext.Provider>
    );
};

export default ShoppingContext;
