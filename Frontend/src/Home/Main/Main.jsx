import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet /> {/* This is where Nav and other nested routes will render */}
        </div>
    );
};

export default Main;