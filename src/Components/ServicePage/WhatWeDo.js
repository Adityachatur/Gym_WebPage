import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../Images/classesimg1.jpg";
import img2 from "../Images/classesimg2.jpg";
import img3 from "../Images/classesimg3.webp";
import img4 from "../Images/classesimg4.jpg";
const WhatWeDo = () => {
    useEffect(() => {
        AOS.init({
           duration:3000,
        });
    }, []);
    return (
        <div>
            <div className=" text-center pt-20 pb-5">
                <p className="text-orange-800 lg:text-xl text-lg">What we do</p>
                <h1 className="text-white mt-2 lg:text-3xl text-lg uppercase">
                    PUSH YOUR LIMITS FORWARD
                </h1>
            </div>

            <div className="flex flex-wrap lg:w-9/12 mx-auto w-full">
                <div className="w-1/2 lg:w-1/2 xl:w-1/4 px-1   h-64" data-aos="fade-down">
                    <img src={img1} alt="" className="object-cover w-full h-full" />
                </div>

                <div className="w-1/2 lg:w-1/2 xl:w-1/4 px-1  bg-gray-900  h-64 servicecard" data-aos="fade-down">
                    <div className="flex flex-col py-6 px-3">
                        <p className="pt-10 lg:text-xl text-lg font-bold text-white">
                            Personal Training
                        </p>
                        <p className="pt-4 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus, facilis?
                        </p>
                        <h3 className="pt-2 lg:text-xl text-lg  font-bold text-white ">
                            Explore
                        </h3>
                    </div>
                </div>

                <div className="w-1/2 lg:w-1/2 xl:w-1/4 px-1   h-64" data-aos="fade-down-right">
                    <img src={img2} alt="" className="object-cover w-full h-full" />
                </div>

                <div className="w-1/2 lg:w-1/2 xl:w-1/4 px-1  bg-gray-900  h-64 servicecard" data-aos="fade-down">
                    <div className="flex flex-col py-6 px-3">
                        <p className="pt-10 lg:text-xl text-lg font-bold text-white">
                            Group fitness classes
                        </p>
                        <p className="pt-4 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus, facilis?
                        </p>
                        <h3 className="pt-2 lg:text-xl text-lg  font-bold text-white ">
                            Explore
                        </h3>
                    </div>
                </div>

                <div className="w-1/2 lg:w-1/2 xl:w-1/4 px-1  bg-gray-900  h-64 servicecard" data-aos="fade-up">
                    <div className="flex flex-col py-6 px-3">
                        <p className="pt-10 lg:text-xl text-lg font-bold text-white">
                            Strength training
                        </p>
                        <p className="pt-4 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus, facilis?
                        </p>
                        <h3 className="pt-2 lg:text-xl text-lg  font-bold text-white ">
                            Explore
                        </h3>
                    </div>
                </div>

                <div className="w-1/2 lg:w-1/2 xl:w-1/4 px-1   h-64" data-aos="fade-up">
                    <img src={img3} alt="" className="object-cover w-full h-full" />
                </div>

                <div className="w-1/2 lg:w-1/2 xl:w-1/4 px-1  bg-gray-900  h-64 servicecard" data-aos="fade-up">
                    <div className="flex flex-col py-6 px-3">
                        <p className="pt-10 lg:text-xl text-lg font-bold text-white">
                            Body building
                        </p>
                        <p className="pt-4 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus, facilis?
                        </p>
                        <h3 className="pt-2 lg:text-xl text-lg  font-bold text-white ">
                            Explore
                        </h3>
                    </div>
                </div>

                <div className="w-1/2 lg:w-1/2 xl:w-1/4 px-1   h-64" data-aos="fade-up">
                    <img src={img4} alt="" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
