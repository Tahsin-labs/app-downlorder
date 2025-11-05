import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div className='nav a.active'>



            <header class="bg-white shadow-sm">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-gradient-to-r  rounded-lg flex items-center justify-center">
                            <img src={'https://i.ibb.co.com/93Wt51DN/logo.png'} alt="" />
                        </div>
                        <span class="font-bold text-purple-600"><NavLink to="/">HERO.IO</NavLink></span>
                    </div>

                    <nav class="hidden md:flex space-x-6">
                        {/* <a href="#" class="text-purple-600 font-medium hover:text-purple-800 transition">Home</a>
                        <a href="#" class="text-gray-600 font-medium hover:text-gray-800 transition">Apps</a>
                        <a href="#" class="text-gray-600 font-medium hover:text-gray-800 transition">Installation</a> */}

                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/apps">Apps</NavLink>
                        <NavLink to="Installation">Installation</NavLink>
                    </nav>

                    <button class="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium  hover:from-purple-600 hover:to-blue-700 transition">
                        <a className=' justify-center' href="https://play.google.com/store/games?hl=en">
                        
                            <img src={'https://i.ibb.co.com/Qv5db6L6/Vector.png'} alt="" className='' />
                            <span>Contribute</span>
                        </a>

                    </button>
                </div>
            </header>









            {/* <NavLink  to="/">Home</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apps">Apps</NavLink>
            <NavLink to="Installation">Installation</NavLink>
          */}


            {/* <NavLink></NavLink> */}
        </div>
    );
};

export default Header;