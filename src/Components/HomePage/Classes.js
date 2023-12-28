import React,{useEffect} from 'react'
import img1 from '../Images/classesimg1.jpg'
import img2 from '../Images/classesimg2.jpg'
import img3 from '../Images/classesimg3.webp'
import img4 from '../Images/classesimg4.jpg'
import img5 from '../Images/claeesimg5.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
const Classes = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);
    return (
        <div className='bg-gray-900'>
            <div className="heading text-center py-10">
                <h1 className='text-orange-800 font-Oswald text-2xl'>OUR CLASS</h1>
                <h1 className='text-white font-Montserrat text-2xl mt-3'>WHAT WE CAN OFFER</h1>
            </div>
            <div class="container mx-auto p-4">
                <div class="flex flex-wrap -mx-4  justify-center">

                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4" data-aos="fade-up">
                        <div class="bg-black rounded-lg shadow-md">
                            <img class="w-full h-full object-cover rounded-lg mb-4 polygon-clip" src={img1} alt="img1" />
                            <div class="flex justify-between">
                                <div class="bg-black ml-4 flex flex-col mb-3">
                                    <h2 class="text-lg text-orange-800 font-Oswald font-bold">Strength</h2>
                                    <h2 class="text-lg text-white font-Roboto">Weightlifting</h2>
                                </div>
                                <div class="mr-4  mt-2">
                                    <button class="bg-gray-800  text-white px-4 py-2 text-lg hover:border-2 border-gray-700"><FontAwesomeIcon icon={faGreaterThan} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4" data-aos="fade-up">
                        <div class="bg-black rounded-lg shadow-md">
                            <img class="w-full h-full object-cover rounded-lg mb-4 polygon-clip" src={img2} alt="img1" />
                            <div class="flex justify-between">
                                <div class="bg-black ml-4 flex flex-col mb-3">
                                    <h2 class="text-lg text-orange-800 font-bold font-Oswald">Yoga</h2>
                                    <h2 class="text-lg text-white font-Roboto">flexibility</h2>
                                </div>
                                <div class="mr-4  mt-2">
                                    <button class="bg-gray-800  text-white px-4 py-2 text-lg hover:border-2 border-gray-700"><FontAwesomeIcon icon={faGreaterThan} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4" data-aos="fade-up">
                        <div class="bg-black rounded-lg shadow-md">
                            <img class="w-full h-full object-cover rounded-lg mb-4 polygon-clip" src={img3} alt="img1" />
                            <div class="flex justify-between">
                                <div class="bg-black ml-4 flex flex-col mb-3">
                                    <h2 class="text-lg text-orange-800 font-bold font-Oswald">Power</h2>
                                    <h2 class="text-lg text-white font-Roboto">Hand Power</h2>
                                </div>
                                <div class="mr-4  mt-2">
                                    <button class="bg-gray-800  text-white px-4 py-2 text-lg hover:border-2 border-gray-700"><FontAwesomeIcon icon={faGreaterThan} /></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-4" data-aos="fade-up">
                        <div class="bg-black  rounded-lg shadow-md">
                            <img class="w-full h-full object-cover rounded-lg mb-4 polygon-clip" src={img4} alt="img1" />
                            <div class="flex justify-between">
                                <div class="bg-black ml-4 flex flex-col mb-3">
                                    <h2 class="text-lg text-orange-800 font-Oswald font-bold">CARDIO</h2>
                                    <h2 class="text-lg text-white font-Roboto">INDOOR RUNNING</h2>
                                </div>
                                <div class="mr-4  mt-2">
                                    <button class="bg-gray-800  text-white px-4 py-2 text-lg hover:border-2 border-gray-700"><FontAwesomeIcon icon={faGreaterThan} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-4" data-aos="fade-up">
                        <div class="bg-black rounded-lg shadow-md">
                            <img class="w-full h-full object-cover rounded-lg mb-4 polygon-clip" src={img5} alt="img1" />
                            <div class="flex justify-between">
                                <div class="bg-black ml-4 flex flex-col mb-3">
                                    <h2 class="text-lg text-orange-800 font-Oswald font-bold">TRANNING</h2>
                                    <h2 class="text-lg text-white font-Roboto">PERSONAL TRANNER</h2>
                                </div>
                                <div class="mr-4  mt-2">
                                    <button class="bg-gray-800  text-white px-4 py-2 text-lg hover:border-2 border-gray-700"><FontAwesomeIcon icon={faGreaterThan} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Classes
