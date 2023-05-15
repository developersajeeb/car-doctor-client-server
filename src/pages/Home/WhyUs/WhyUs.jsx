import React from 'react';
import icon1 from '../../../assets/icons/check.svg'
import icon2 from '../../../assets/icons/deliveryt.svg'
import icon4 from '../../../assets/icons/group.svg'
import icon5 from '../../../assets/icons/person.svg'
import icon6 from '../../../assets/icons/Wrench.svg'

const WhyUs = () => {
    return (
        <section>
            <div className='mt-20 text-center'>
                <h4 className='text-orange-600 font-semibold'>Core Features</h4>
                <h2 className='text-5xl font-bold my-3'>Why Choose Us</h2>
                <p className='text-gray-500 mt-4 leading-8 md:w-[650px] mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
                <div className='border-2 p-9 rounded-lg hover:bg-orange-500 duration-300'>
                    <img className='mx-auto' src={icon4} alt="" />
                    <p className='text-center mt-3 font-medium text-gray-700'>Expert Team</p>
                </div>
                <div className='border-2 p-9 rounded-lg hover:bg-orange-500 duration-300'>
                    <img className='mx-auto' src={icon2} alt="" />
                    <p className='text-center mt-3 font-medium text-gray-700'>Timely Delivery</p>
                </div>
                <div className='border-2 p-9 rounded-lg hover:bg-orange-500 duration-300'>
                    <img className='mx-auto' src={icon5} alt="" />
                    <p className='text-center mt-3 font-medium text-gray-700'>24/7 Support</p>
                </div>
                <div className='border-2 p-9 rounded-lg hover:bg-orange-500 duration-300'>
                    <img className='mx-auto' src={icon6} alt="" />
                    <p className='text-center mt-3 font-medium text-gray-700'>Best Equipment</p>
                </div>
                <div className='border-2 p-9 rounded-lg hover:bg-orange-500 duration-300'>
                    <img className='mx-auto' src={icon1} alt="" />
                    <p className='text-center mt-3 font-medium text-gray-700'>100% Guaranty</p>
                </div>
                <div className='border-2 p-9 rounded-lg hover:bg-orange-500 duration-300'>
                    <img className='mx-auto' src={icon2} alt="" />
                    <p className='text-center mt-3 font-medium text-gray-700'>Timely Delivery</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;