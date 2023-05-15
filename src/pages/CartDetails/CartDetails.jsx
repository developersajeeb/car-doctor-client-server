import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import banner from '../../assets/images/checkout/checkout.png';
import close from '../../assets/icons/close.png';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const CartDetails = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [checkOuts, setCheckOuts] = useState([])
    const url = `https://car-doctor-server-orcin.vercel.app/checkouts?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setCheckOuts(data)
                } else {
                    navigate('/login')
                }
            })
    }, [url])

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn-fill',
            cancelButton: 'btn-fill mr-4'
        },
        buttonsStyling: false
    })

    const hangleDelete = id => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-orcin.vercel.app/checkouts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = checkOuts.filter(checkOut => checkOut._id !== id);
                            setCheckOuts(remaining);
                        }
                    })
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            }
        })
    }

    const handleConfirm = id => {
        fetch(`https://car-doctor-server-orcin.vercel.app/checkouts/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // const remaining = checkOuts.filter(checkOut => checkOut._id !== id);
                    const oldState = structuredClone(checkOuts);
                    const update = oldState.find(checkOut => checkOut._id === id);
                    update.status = 'Confirm';
                    // const newCheckOuts = [...remaining, update];
                    setCheckOuts(oldState)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your form has been successfully submitted',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <main className='mx-6 mb-10 md:mx-32 md:mb-32 md:my-0'>
            <section style={{ backgroundImage: `url(${banner})` }} className='bg-cover bg-center py-10 md:p-32 rounded-lg'>
                <h1 className='text-center md:text-start md:pl-6 text-white text-4xl font-semibold'>Cart Details</h1>
            </section>
            <section className='my-16 md:mt-24'>
                <div className="flex flex-col">
                    <div className='overflow-x-auto'>
                        <div className='min-w-full '>
                            <table className='w-full divide-y divide-gray-200 '>
                                <tbody className='bg-white divide-y divide-gray-200'>
                                    {checkOuts.map((checkOut) => (
                                        <tr key={checkOut._id}>
                                            <td className="p-4">
                                                <div className='flex items-center gap-4'>
                                                    <figure>
                                                        <img onClick={() => hangleDelete(checkOut._id)} src={close} alt="" className='bg-gray-900 p-2 rounded-full w-10 cursor-pointer' />
                                                    </figure>
                                                    <img src={checkOut.img} alt="" className='w-32 h-32' />
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 font-medium">{checkOut.service}</td>
                                            <td className="py-4 px-6 font-medium">$ {checkOut.price}</td>
                                            <td className="py-4 px-6 font-medium">{checkOut.date}</td>
                                            <td className="">
                                                {
                                                    checkOut.status === 'Confirm' ?
                                                        <span onClick={() => handleConfirm(checkOut._id)} className='bg-green-600 px-3 py-2 rounded-md text-white cursor-pointer'>Confirm</span>
                                                        :
                                                        <span onClick={() => handleConfirm(checkOut._id)} className='bg-orange-600 px-3 py-2 rounded-md text-white cursor-pointer'>Pending</span>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CartDetails;