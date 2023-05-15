import React from 'react';
import { FaBusinessTime, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
    return (
        <section className='grid md:grid-cols-3 p-10 md:px-32 md:py-20 rounded-lg gap-10 bg-black mt-28'>
            <div>
                <div className='flex items-center gap-4'>
                    <span><FaBusinessTime className='text-orange-600' size={35} /></span>
                    <div>
                        <p className='text-white text-sm'>We are open monday-friday</p>
                        <h4 className='text-white text-2xl font-medium'>7:00 am - 9:00 pm</h4>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-4'>
                    <span><FaPhoneAlt className='text-orange-600' size={35} /></span>
                    <div>
                        <p className='text-white text-sm'>Have a question?</p>
                        <h4 className='text-white text-2xl font-medium'>+2546 251 2658</h4>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-4'>
                    <span><FaLocationArrow className='text-orange-600' size={35} /></span>
                    <div>
                        <p className='text-white text-sm'>Need a repair? our address</p>
                        <h4 className='text-white text-2xl font-medium'>Liza Street, New York</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;