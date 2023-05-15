import React, { useContext, useState } from 'react';
import logo from '../../../assets/logo.svg';
import { Spin as Hamburger } from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom';
import logOutIcon from '../../../assets/icons/logouticon.png'
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => console.log(error))
    }

    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                <Link className='flex items-center' to='/'>
                    <img src={logo} className="w-16" alt="Logo" />
                    <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Home Cooking</h1>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setOpen(!isOpen) }}>
                    <Hamburger size={25}></Hamburger>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex items-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-600 font-medium' : 'text-gray-800'}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-600 font-medium' : 'text-gray-800'}>
                            <li>About</li>
                        </NavLink>
                        <NavLink to='/services' className={({ isActive }) => isActive ? 'text-orange-600 font-medium' : 'text-gray-800'}>
                            <li>Services</li>
                        </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-orange-600 font-medium' : 'text-gray-800'}>
                            <li>Blog</li>
                        </NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-orange-600 font-medium' : 'text-gray-800'}>
                            <li>Contact</li>
                        </NavLink>
                        {
                            user ? <>
                                <NavLink to='/cart-details' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                                    <li>Cart Details</li>
                                </NavLink>
                                <NavLink>
                                    <img onClick={handleLogOut} className='w-8 mx-auto' src={logOutIcon} alt="" />
                                </NavLink>
                            </>
                                :
                                <NavLink to='/login'>
                                    <li className='text-orange-600 bg-transparent border border-orange-600 hover:bg-orange-600 hover:border-orange-600 hover:text-white duration-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2'>Login</li>
                                </NavLink>
                        }

                    </ul>
                </div>
                <ul className={`font-medium p-4 pt-3 grid gap-3 w-32 border text-center border-gray-300 rounded-lg bg-gray-50 md:hidden absolute duration-500 z-50 ${isOpen ? 'right-2 top-20' : 'hidden'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                        <li>About</li>
                    </NavLink>
                    <NavLink to='/services' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                        <li>services</li>
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                        <li>Blog</li>
                    </NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                        <li>Contact</li>
                    </NavLink>
                    {
                        user ? <>
                            <NavLink to='/cart-details' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                                <li>Cart Details</li>
                            </NavLink>
                            <NavLink>
                                <img onClick={handleLogOut} className='w-8 mx-auto' src={logOutIcon} alt="" />
                            </NavLink>
                        </>
                            :
                            <NavLink to='/login'>
                                <li className='text-orange-600 bg-transparent border border-orange-600 hover:bg-orange-600 hover:border-orange-600 hover:text-white duration-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2'>Login</li>
                            </NavLink>
                    }

                </ul>
            </div>
        </nav>

    );
};

export default NavBar;