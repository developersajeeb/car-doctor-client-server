import React from 'react';
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Team = () => {
    return (
        <section>
            <div className='mt-20 text-center'>
                <h4 className='text-orange-600 font-semibold'>Team</h4>
                <h2 className='text-5xl font-bold my-3'>Meet Our Team</h2>
                <p className='text-gray-500 mt-4 leading-8 md:w-[650px] mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
                <div className='border-2 rounded-lg shadow-sm p-6 mt-10'>
                    <img className='rounded-lg w-full bg-cover bg-center' src={team1} alt="" />
                    <h2 className='text-2xl font-semibold mt-6 text-center'>Car Engine Plug</h2>
                    <p className='text-center mb-4'>Engine Expert</p>
                    <ul className='flex items-center gap-3 justify-center'>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaFacebookF /></a></li>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaTwitter /></a></li>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaLinkedinIn /></a></li>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaInstagram /></a></li>
                    </ul>
                </div>
                <div className='border-2 rounded-lg shadow-sm p-6 mt-10'>
                    <img className='rounded-lg w-full bg-cover bg-center' src={team2} alt="" />
                    <h2 className='text-2xl font-semibold mt-6 text-center'>Car Engine Plug</h2>
                    <p className='text-center mb-4'>Engine Expert</p>
                    <ul className='flex items-center gap-3 justify-center'>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaFacebookF /></a></li>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaTwitter /></a></li>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaLinkedinIn /></a></li>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaInstagram /></a></li>
                    </ul>
                </div>
                <div className='border-2 rounded-lg shadow-sm p-6 mt-10'>
                    <img className='rounded-lg w-full bg-cover bg-center' src={team3} alt="" />
                    <h2 className='text-2xl font-semibold mt-6 text-center'>Car Engine Plug</h2>
                    <p className='text-center mb-4'>Engine Expert</p>
                    <ul className='flex items-center gap-3 justify-center'>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaFacebookF /></a></li>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaTwitter /></a></li>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaLinkedinIn /></a></li>
                        <li className='border-2 p-2 rounded-full border-orange-600 text-orange-600 cursor-pointer'><a href='https://www.twitter.com/developersajeeb'><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Team;