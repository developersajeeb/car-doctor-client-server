import React from 'react';
import aboutImg from '../../../assets/images/about-section.png'

const About = () => {
    return (
        <section className='grid md:grid-cols-2 items-center'>
            <div><img src={aboutImg} alt="" /></div>
            <div className='mt-8 md:mt-0'>
                <h4 className='text-orange-600 font-semibold'>About Us</h4>
                <h2 className='text-5xl font-bold md:w-96 my-3'>We are qualified & of experience in this field</h2>
                <p className='text-gray-500 mt-6 leading-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                <br></br>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                </p>
                <button className='btn-fill mt-10'>Get More Info</button>
            </div>
        </section>
    );
};

export default About;