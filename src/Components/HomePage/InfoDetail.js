import React from 'react'

import { Link } from 'react-router-dom'

const InfoDetail = () => {
    return (
        <div className=''>
            <div class="relative flex items-center justify-center bg-cover bg-center background mt-28 mx-2 md:mmt-20">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="text-center text-white relative z-10 ">
                    <h1 class="lg:text-5xl md:text-2xl text-xl  uppercase  font-bold mb-4 font-Oswald">registration now to get more deals</h1>
                    <p class="text-xl text-gray-400 uppercase font-Montserrat">Where health, beauty and fitness meet.</p>
                   <Link to={'Contact'}> <button className='text-xl uppercase border-orange-800 border-2 px-4 py-2 mt-6 hover:text-white hover:bg-orange-800 font-Roboto font-bold'>Appoinment</button></Link>
                </div>
            </div>

        </div>
    )
}

export default InfoDetail
