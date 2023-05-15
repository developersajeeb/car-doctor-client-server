import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    const [fetchError, setFetchError] = useState('');

    useEffect(() => {
        fetch('https://car-doctor-server-orcin.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => setFetchError(error))
    }, []);

    return (
        <section>
            <div className='mt-20 text-center'>
                <h4 className='text-orange-600 font-semibold'>About Us</h4>
                <h2 className='text-5xl font-bold my-3'>Our Service Area</h2>
                <p className='text-gray-500 mt-4 leading-8 md:w-[650px] mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    services.map(service => <div className='border-2 rounded-lg shadow-sm p-6 mt-10' key={service._id}>
                        <img className='rounded-lg h-60 w-full bg-cover bg-center' src={service.img} alt="" />
                        <h2 className='text-2xl font-semibold mt-6 mb-4'>{service.title}</h2>
                        <div className='flex items-center justify-between text-orange-600'>
                            <p className='font-medium'>Price: ${service.price}</p>
                            <Link to={`/chackout/${service._id}`}>
                                <FaArrowRight className='text-lg cursor-pointer' />
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Services;