import { FaGoogle, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="py-14 px-4 md:p-20 bg-gray-900">
                <div className="md:flex text-left">
                    <div className="w-full lg:w-6/12">
                        <img src={logo} alt="" />
                        <p className="my-4 text-white Gray-600 w-96">
                            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
                        </p>
                        <ul className="flex">
                            <li className="bg-gray-600 text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer">
                                <FaGoogle></FaGoogle>
                            </li>
                            <li className="bg-gray-600 text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer">
                                <FaTwitter></FaTwitter>
                            </li>
                            <li className="bg-gray-600 text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer">
                                <FaInstagram></FaInstagram>
                            </li>
                            <li className="bg-gray-600 text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer">
                                <FaLinkedinIn></FaLinkedinIn>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <div className="flex flex-wrap mb-6">
                            <div className="w-full lg:w-4/12 px-4 mt-8 md:mt-0">
                                <span className="block uppercase text-white text-sm font-semibold mb-6">About Us</span>
                                <ul className="list-unstyled grid gap-2">
                                    <li>
                                        <a className="text-gray-200 block pb-2 text-sm">Home</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-200 block pb-2 text-sm">Service</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-200 block pb-2 text-sm">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 my-8 md:my-0">
                                <span className="block uppercase text-white text-sm font-semibold mb-6">Company</span>
                                <ul className="list-unstyled grid gap-2">
                                    <li>
                                        <a className="text-gray-200 block pb-2 text-sm">Why Car Doctor</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-200 block pb-2 text-sm">About</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-white text-sm font-semibold mb-6">Support</span>
                                <ul className="list-unstyled grid gap-2">
                                    <li>
                                        <a className="text-gray-200 block pb-2 text-sm">Support Center</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-200 block pb-2 text-sm">Feedback</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-200 block pb-2 text-sm">Accesbility</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;