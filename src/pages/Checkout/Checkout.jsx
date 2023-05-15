import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import banner from '../../assets/images/checkout/checkout.png';

const Checkout = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;

        const checkout = {
            customerName: name,
            date,
            email,
            img,
            price: price,
            service: title,
            service_id: _id,
        }
        console.log(checkout);

        fetch('https://car-doctor-server-orcin.vercel.app/checkouts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(checkout)
        })
        .then(res => res.json())
        .then(data =>  {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your form has been successfully submitted',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  navigate('/cart-details')
            }
        })
    }
    return (
        <main className='mx-6 mb-10 md:mx-32 md:mb-32 md:my-0'>
            <section style={{ backgroundImage: `url(${banner})` }} className='bg-cover bg-center py-10 md:p-32 rounded-lg'>
                <h1 className='text-center md:text-start md:pl-6 text-white text-4xl font-semibold'>Place Order</h1>
            </section>
            <section className="my-10 md:mt-24 bg-gray-100 p-6 md:p-28 rounded-lg">
                <form className="mx-auto" onSubmit={handleOrder}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="name"
                                    id="firstName"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                                    placeholder='Your First Name'
                                    defaultValue={user?.name}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block font-medium text-gray-900">
                                Date
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block font-medium text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                                    placeholder='Your Email'
                                    defaultValue={user?.email}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block font-medium text-gray-900">
                                Cost
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    autoComplete="price"
                                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                                    placeholder='Main Cost'
                                    defaultValue={price}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block font-medium text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={8}
                                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                                    placeholder='Your Massage'
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="btn-fill w-full"
                        >
                            Order Confirm
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Checkout;