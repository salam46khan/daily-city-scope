import ad from '../../assets/ad.gif'
import logo from '../../../public/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { FaSignOutAlt, FaUser, FaUserCheck } from 'react-icons/fa'
import useIdentity from '../../hook/useIdentity';



const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const [identity] = useIdentity()
    const users = identity[0]
    // console.log(users);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('log out successful');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-article'}>All News</NavLink></li>
        {
            user? <>
                <li><NavLink to={'/add-article'}>Post</NavLink></li>
                <li><NavLink to={'/premium'}>Premium News</NavLink></li>
            </>
            : ''
        }
        

    </>
    return (
        <div className="mynav bg-base-300">
            <div className='container mx-auto '>
                <div className='flex justify-evenly items-center'>
                    <div className='hidden md:block'>
                        <img className='h-32' src={logo} alt="" />
                    </div>
                    <div>
                        <img className='h-32' src={ad} alt="" />
                    </div>


                </div>
                <div className={`${scroll ? 'fixed bg-white top-0 left-0 ' : ''} w-full z-50`}>
                    <div className={`navbar container mx-auto flex justify-between`}>
                        <div className="md:navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navlinks}
                                </ul>
                            </div>
                            <Link className='font-logoTitle font-bold md:text-2xl text-[18px]' to={'/'}>Daily <span>City</span>Scope</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg">
                                {navlinks}

                            </ul>
                        </div>
                        <div className="md:navbar-end">

                            {
                                user ? <>
                                <Link className='flex mr-2 tooltip tooltip-bottom items-center' data-tip={user.displayName} to={'/profile'}>
                                    <button className='btn btn-circle overflow-hidden text-green-500 text-3xl'>
                                        
                                        
                                        {
                                            users?.photoURL ? <img src={users?.photoURL} alt="" /> : user?.photoURL ? <img src={user.photoURL} alt="" /> : <FaUserCheck></FaUserCheck>
                                        }
                                        
                                        
                                    </button>
                                </Link>
                                <button onClick={handleLogOut} className='btn h-12 w-12 btn-circle tooltip tooltip-bottom text-3xl flex justify-center items-center text-red-500' data-tip='Log Out'>
                                    <FaSignOutAlt />
                                </button>
                                </>
                                    :
                                    <Link to={'/login'} className="tooltip tooltip-bottom" data-tip="Log in">
                                        <button className='btn btn-circle text-3xl'>
                                            <FaUser></FaUser>
                                        </button>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;