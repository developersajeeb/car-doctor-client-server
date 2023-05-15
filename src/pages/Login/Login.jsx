import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const {singIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true });
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
                    Login
                </h2>
                <div className="mt-10">
                    <form className="space-y-6" onSubmit={handleLogin}>
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
                                Sign in
                            </button>
                        </div>
                    </form>

                    <SocialLogin></SocialLogin>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to='/singup'>
                        <span className='font-semibold leading-6 text-orange-600 hover:text-orange-500'>Sing Up</span>
                        </Link>                        
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Login;