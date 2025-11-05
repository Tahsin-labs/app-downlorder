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


                        <NavLink className='flex gap-2' to="/"><img src={'https://i.ibb.co.com/zh6XJnC5/home-icon-house-icon-illustration-perfect-for-all-project-vector.jpg'} alt="" class="w-7 h-7" /><span>Home</span></NavLink>
                        <NavLink className='flex gap-2' to="/apps"><img src={'https://i.ibb.co.com/FkgQTxSH/images-2.png'} alt="" class="w-7 h-7" /><span>Apps</span></NavLink>
                        <NavLink className='flex gap-2' to="Installation"><img src={'https://i.ibb.co.com/hR8k4PRx/download-icon-vector-illustration-install-symbol-654297-207.jpg'} alt="" class="w-9 h-7" /><span>Installation</span></NavLink>
                    </nav>

                    <button class="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium  hover:from-purple-600 hover:to-blue-700 transition">
                        <a className='flex gap-2' href="https://play.google.com/store/games?hl=en">

                            <img src={'https://i.ibb.co.com/Qv5db6L6/Vector.png'} alt="" className='items-center' />
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