import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Priceboxcard = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);
    return (
        <div>

            <section className="text-gray-600 body-font bg-black">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 text-orange-800 font-Oswald">OUR PLAN</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl uppercase text-white font-Montserrat">Choose your pricing plan</p>
                    </div>
                    <div className="flex flex-wrap -m-4 justify-center text-center">
                        <div class="card p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-right">
                            <div class="border-2px-4 py-6  bg-gray-900 pricecard">
                                <div className='pricecard-content'>
                                    <h2 className='text-white font-bold font-Oswald text-3xl heading'>Class drop-in</h2>
                                    <h1 className='text-orange-800 text-4xl uppercase  pt-4 font-Oswald mb-2'>RS. 3,000 </h1>
                                    <p className='text-lg font-bold text-gray-400 heading font-Montserrat'>One Month</p>
                                </div>
                                <div class="pricecard-content flex flex-col justify-center text-center">
                                    <div class="title-font font-medium text-lg text-gray-300 heading py-7 font-Roboto">
                                        <p class="mb-4">Free riding</p>
                                        <p class="mb-4">Unlimited equipment</p>
                                        <p class="mb-4">Personal Trainer</p>
                                        <p class="mb-4">Weight losing classes</p>
                                        <p class="mb-4">Month to mouth</p>
                                        <p class="mb-4">No time restriction</p>
                                    </div>
                                    <button className='bg-gray-800 w-3/4 py-2 text-white mx-auto font-Roboto font-bold'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                        <div class="card p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-up">
                            <div class="border-2px-4 py-6  bg-gray-900 pricecard">
                                <div className='pricecard-content'>
                                    <h2 className='text-white font-bold font-Oswald text-3xl heading'>Class drop-in</h2>
                                    <h1 className='text-orange-800 text-4xl uppercase  pt-4 font-Oswald mb-2'>RS. 6,000</h1>
                                    <p className='text-lg font-bold text-gray-400 heading font-Montserrat'>Three Month</p>
                                </div>
                                <div class="pricecard-content flex flex-col justify-center text-center">
                                    <div class="title-font font-medium text-lg text-gray-300 heading py-7 font-Roboto">
                                        <p class="mb-4">Free riding</p>
                                        <p class="mb-4">Unlimited equipment</p>
                                        <p class="mb-4">Personal Trainer</p>
                                        <p class="mb-4">Weight losing classes</p>
                                        <p class="mb-4">Month to mouth</p>
                                        <p class="mb-4">No time restriction</p>
                                    </div>
                                    <button className='bg-gray-800 w-3/4 py-2 text-white mx-auto font-Roboto font-bold'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                        <div class="card p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-left">
                            <div class="border-2px-4 py-6  bg-gray-900 pricecard">
                                <div className='pricecard-content'>
                                    <h2 className='text-white font-bold font-Oswald text-3xl heading'>Class drop-in</h2>
                                    <h1 className='text-orange-800 text-4xl uppercase  pt-4 font-Oswald mb-2'>RS. 12,000</h1>
                                    <p className='text-lg font-bold text-gray-400 heading font-Montserrat'>One Year</p>
                                </div>
                                <div class="pricecard-content flex flex-col justify-center text-center">
                                    <div class="title-font font-medium text-lg text-gray-300 heading py-7 font-Roboto">
                                        <p class="mb-4">Free riding</p>
                                        <p class="mb-4">Unlimited equipment</p>
                                        <p class="mb-4">Personal Trainer</p>
                                        <p class="mb-4">Weight losing classes</p>
                                        <p class="mb-4">Month to mouth</p>
                                        <p class="mb-4">No time restriction</p>
                                    </div>
                                    <button className='bg-gray-800 w-3/4 py-2 text-white mx-auto font-bold'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Priceboxcard
