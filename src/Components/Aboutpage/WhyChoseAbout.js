import React from 'react'
import aboutusimg from '../Images/Aboutusimg.jpg'
const WhyChoseAbout = () => {
    const ProgressBar = ({ label, progress }) => (
        <div className="mb-4">

            <div className='flex justify-between'>
            <p className=" ml-3 text-sm font-semibold text-gray-600">{label}</p>
            <p className="mr-3 text-sm text-white">{`${progress}%`}</p>
            </div>
    
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div className="flex items-center w-full">
                        <div className="w-full bg-white rounded-full">
                            <div
                                className="h-2 bg-gray-800 rounded-full"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <div className=" mx-auto mb-20 flex lg:flex-row md:flex-col sm:flex-col flex-col">
                <div className="w-full sm:w-11/12">
                    <img
                        className="object-cover w-full h-full"
                        src={aboutusimg}
                        alt="Sample"
                    />
                </div>
                <div className="w-full  sm:w-full p-8">
                    <h1 className='text-orange-800 text-base uppercase'>About us</h1>
                    <h1 className="text-4xl text-white  uppercase font-bold mb-4">What we have done</h1>
                    <h1 className='text-white text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vero accusamus repellendus quos dolore magni fuga ducimus, illo laudantium dolor repellat, ut vitae. Non, quibusdam?</h1>
                    <div className='mt-4'>
                        <ProgressBar label="Body building" progress={85} />
                        <ProgressBar label="Training" progress={90} />
                        <ProgressBar label="Fitness" progress={75} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoseAbout
