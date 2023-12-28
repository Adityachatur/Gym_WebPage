import { faEnvelope, faLocationPin, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({
       duration:3000,
    });
}, []);
  return (
    <div>
      <div className='text-white bg-black flex lg:justify-evenly justify-start lg:flex-row flex-wrap md:flex-cols py-3'>
        <div className='flex mx-4 text-2xl card ' data-aos="fade-up">
          <FontAwesomeIcon icon={faLocationPin} className='mx-4 my-2 icon-bg bg-orange-900  text-black h-8 w-8 p-4 rounded-full' />
          <p className='mt-5 lg:text-sm text-base font-Montserrat cursor-pointer '>Balajinagar medaknrwaidi chakan, <br /> 410501</p>
        </div>
        <div className='flex mx-4 my-2 text-2xl card' data-aos="fade-up">
          <FontAwesomeIcon icon={faMobileScreenButton} className='mx-4 bg-orange-900 text-black icon-bg h-8 w-8 p-4 rounded-full' />
          <p className='mt-5 lg:text-sm text-base font-Montserrat cursor-pointer'>+91 9552314201 </p>
        </div>
        <div className='flex mx-4 my-2 text-2xl card ' data-aos="fade-up">
          <FontAwesomeIcon icon={faEnvelope} className='mx-4 bg-orange-900 h-8 w-8 p-4 icon-bg text-black rounded-full' />
          <p className='mt-5 lg:text-sm text-base font-Montserrat cursor-pointer'>adityachatur7996@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
