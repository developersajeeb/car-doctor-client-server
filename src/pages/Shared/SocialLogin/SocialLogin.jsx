import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {googleSingIn} = useContext(AuthContext);

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSingIn = () => {
        googleSingIn()
        .then(result => {
            console.log(result.user);
            navigate(from)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='mt-8'>
            <div className='border mb-6'></div>
            <div className='text-center'>
                <h4 className='font-semibold mb-4'>Or Sing In With</h4>
                <button onClick={handleGoogleSingIn} className='font-bold p-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 text-xl rounded-full w-12 h-12 mr-3'>G</button>
                <button className='font-bold p-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 text-xl rounded-full w-12 h-12'>f</button>
            </div>
        </div>
    );
};

export default SocialLogin;