// src/components/Layout.js

import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </nav>
        <main>{children}</main>
    </>
);

export default Layout;
