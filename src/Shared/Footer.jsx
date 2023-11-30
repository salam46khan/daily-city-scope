import { FaEnvelope, FaFacebook, FaFacebookF, FaHome, FaInstagram, FaLink, FaMailBulk, FaPhone, FaTwitch, FaTwitter, FaVoicemail } from 'react-icons/fa';
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-base-300 py-10 p-3">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img className='m-auto' src={logo} alt="" />
                </div>
                <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2">
                    <div className='mb-4'>
                        <div>
                            <h2 className='font-newsTitle text-2xl mb-2'>Contact</h2>
                            <div className='flex gap-2 items-center'>
                                <FaPhone></FaPhone>
                                <p>+8801771-3937**</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaEnvelope />
                                <p>city@scope.com</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaLink />
                                <p>www.dailycityscope.com</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h2 className='font-newsTitle text-2xl mb-2'>Address</h2>
                            <div className='flex gap-2 items-center'>
                                <FaHome />
                                <p>1/2 Mofiz Road, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-newsTitle text-2xl mb-3'>Follow Us</h2>
                        <div className='flex flex-wrap gap-3'>
                            <Link to={''} className='btn bg-blue-500 text-2xl btn-circle text-white hover:text-black'>
                                <FaFacebookF />
                            </Link>
                            <Link to={''} className='btn bg-blue-300 text-3xl btn-circle text-white hover:text-black'>
                                <FaTwitter />
                            </Link>
                            <Link to={''} className='btn bg-red-300 text-3xl btn-circle text-white hover:text-black'>
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto text-center'>
                <hr className='border-black'/>
                <p>© 2021 Copyright: Daily City Scope</p>
            </div>
        </div>
    );
};

export default Footer;