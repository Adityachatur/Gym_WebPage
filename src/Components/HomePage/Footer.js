import React, { useState, useEffect } from 'react';
import moment from 'moment';
import logo from '../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const [currentDateTime, setCurrentDateTime] = useState(moment());

    useEffect(() => {
      const intervalId = setInterval(() => setCurrentDateTime(moment()), 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const date = currentDateTime.format('DD MMMM , YYYY')
  
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src={logo} alt="" />
                        </span>
                        <p className="pt-4 text-lg text-gray-500">{date}</p>
                        <p className="pt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aperiam laborum quasi quas natus animi, magni assumenda corporis ipsam amet!</p>
                        <div className='flex space-x-3 mt-3 text-lg cursor-pointer'>
                        <FontAwesomeIcon icon={faFacebook} className='hover:text-white'/>
                        <FontAwesomeIcon icon={faTelegram}   className='hover:text-white'/>
                        <FontAwesomeIcon icon={faInstagram}  className='hover:text-white'/>
                        <FontAwesomeIcon icon={faYoutube}  className='hover:text-white'/>
                        <FontAwesomeIcon icon={faEnvelope} className='hover:text-white' />
                        </div>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">USEFULL LINKES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">About</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">Blog</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">Career</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">Contact</span>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">SUPPORT</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">Login</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">My account</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">Subscribe</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">Contact</span>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-2/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">TIPS AND GUIDE</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800 text-sm">Physical fitness may help prevent depression, anxiety</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">3 min read  | comments</span>
                                </li>
                                <hr className='border-gray-700 my-4' />
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800 text-sm">Fitness: The best exercise to lose belly fat and tone up...</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 hover:text-gray-800">3 min read  | comments</span>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr  className='border-gray-800'/>
                <div className="bg-gray-900">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
                        <p className="text-gray-500 text-sm text-center sm:text-left">Copyright ©2023 All rights reserved | This template is made with
                            <span rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank" previewlistener="true"> <FontAwesomeIcon icon={faHeart} className='text-orange-800'/>  by AdityaChatur </span>
                        </p>
                    </div>
                </div>
            </footer>
            <div>
     
    </div>
        </div>
    )
}

export default Footer
