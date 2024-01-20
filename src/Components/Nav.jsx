import React from "react";
import logo from '../logos.svg' ;

const Nav = () => {

    return(
        <>
            <div className='flex w-screen items-center justify-between p-4 shadow-md h-12 text-white fixed top-0 z-50 backdrop-blur-xl bg-grey-900'>
                <span className='text-2xl font-bold'>
                    <img src={logo} alt="logo" className='w-20 h-13 mt-2 ml-0 md:ml-12' />
                </span>
                <div className='hidden md:flex items-center justify-end'>
                    <ul className='flex items-center justify-end  mr-12 text-lg'>
                        <li className='ml-12'><a href="#">Home</a></li>
                        <li className='ml-12'><a href="#services">Services</a></li>
                        <li className='ml-12'><a href="#blogs">Blogs</a></li>

                    </ul>
                </div>
            </div>
        </>
    );
}

export default Nav;