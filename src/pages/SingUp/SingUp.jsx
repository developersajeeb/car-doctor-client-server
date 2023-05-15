import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const SingUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Account created successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    return (
        <main className="mx-6 my-10 md:m-32 grid md:grid-cols-2 items-center gap-10">
            <div>
                <img src={loginImg} alt="" />
            </div>
            <div className='border-2 p-6 md:p-20 rounded-lg'>
                <h2 className="text-center text-4xl font-medium leading-9 tracking-tight text-gray-900">
                    Sign Up
                </h2>
                <div className="mt-10">
                    <form className="space-y-6" onSubmit={handleSingUp}>
                        <div>
                            <label htmlFor="email" className="block font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="Name"
                                    required
                                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 p-3 text-sm"
                                    placeholder='Your Name'
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 p-3 text-sm"
                                    placeholder='Your Email'
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 p-3 text-sm"
                                    placeholder='Your Password'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full btn-fill">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <SocialLogin></SocialLogin>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link to='/login'>
                            <span className='font-semibold leading-6 text-orange-600 hover:text-orange-500'>Login</span>
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SingUp;