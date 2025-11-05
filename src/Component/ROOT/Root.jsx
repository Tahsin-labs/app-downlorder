import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import './Root.css';

const Root = () => {
    return (
        <div>
         <div className='nav a.active'> <Header ></Header></div>
             <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;