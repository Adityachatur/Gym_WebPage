import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black p-4 navbar">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="text-white font-bold text-lg pl-10"><img src={logo} alt="" /></div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={toggleNavbar}
                >
                    {isOpen ? (
                        <CloseIcon className='w-5 h-10 text-white' />
                    ) : (
                        <ViewWeekIcon className='w-5 h-10 text-white' />
                    )}
                </button>

                {/* Desktop menu */}
                <div className="hidden lg:flex space-x-7">
                    <NavLink to="/" className="text-xl font-bold text-white hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                        Home
                    </NavLink>
                    <NavLink to="/About" className="mr-5 text-xl text-white font-bold hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                        About
                    </NavLink>
                    <NavLink to="/Service" className="mr-5 text-xl text-white font-bold hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                        Service
                    </NavLink>
                    <NavLink to="/Gallery" className="mr-5 text-xl text-white font-bold hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                        Gallery
                    </NavLink>
                    <NavLink to="/Contact" className="mr-5 text-xl text-white font-bold hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                        Contact
                    </NavLink>
                </div>

                <div className='hidden lg:flex space-x-4 text-white text-lg cursor-pointer'>
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <>
                    <div className="lg:hidden mt-2 flex flex-col items-center" onClick={toggleNavbar}>
                        <NavLink to="/" className="mr-5 mt-3 text-xl font-bold text-white hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                            Home
                        </NavLink>
                        <NavLink to="/About" className="mr-5 text-white text-xl font-bold hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                            About
                        </NavLink>
                        <NavLink to="/Service" className="mr-5 text-xl text-white font-bold hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                            Service
                        </NavLink>
                        <NavLink to="/Gallery" className="mr-5 text-xl text-white font-bold hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                            Gallery
                        </NavLink>
                        <NavLink to="/Contact" className="mr-5 text-xl text-white font-bold hover:text-orange-800 font-Oswald" activeClassName="text-orange-800">
                            Contact
                        </NavLink>
                    </div>
                    <div className='lg:hidden mt-4 flex justify-center items-center text-white space-x-3 text-xl cursor-pointer' onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
