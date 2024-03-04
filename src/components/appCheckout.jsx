import React from 'react';
import Checkout from './checkout';
import { Navbar } from './navbar';

function AppCheckout(){
    return (
        <div>
            <Navbar />
            <Checkout />
        </div>
    );
};

export default AppCheckout;