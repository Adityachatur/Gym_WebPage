import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import trainer1 from '../Images/trainer1.jpg';
import trainer2 from '../Images/trainer2.jpg';
import trainer4 from '../Images/trainer4.jpg';
import trainer5 from '../Images/trainer5.jpg';
import trainer7 from '../Images/trainer7.jpg';

const OurTeam = () => {
  const cardData = [
    { imageUrl: trainer1, name: 'Trainer 1' },
    { imageUrl: trainer2, name: 'Trainer 2' },
    { imageUrl: trainer4, name: 'Trainer 3' },
    { imageUrl: trainer5, name: 'Trainer 4' },
    { imageUrl: trainer7, name: 'Trainer 5' },
    // Add more image URLs and names as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const slideInAnimation = {
    animation: 'slideIn 0.3s ease-in-out forwards',
    height: '150px' // Define animation
  };
  return (
    <div className='my-16 lg:mx-12'>
      <div className="flex justify-around mb-4">
        <div className="ml-4 flex flex-col mb-3">
          <h2 className="text-lg text-orange-800 font-semibold font-Oswald">Our Team</h2>
          <h2 className="lg:text-2xl text-sm text-white font-semibold font-Montserrat">TRAIN WITH EXPERTS</h2>
        </div>
        <div className="mr-4 mt-2">
          <button className="bg-gray-900 border-2 border-orange-800 text-white px-4 py-2 lg:text-lg hover:bg-orange-800 text-sm font-Roboto">Contact Us</button>
        </div>
      </div>

      <div className='w-10/12 mx-auto'>
        <Slider {...settings}>
          {cardData.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="mx-3 h-1/5 shadow-md">
                <img src={item.imageUrl} alt={`Team Member ${index + 1}`} className="w-full h-2/5 object-cover" />
              </div>
              {hoveredIndex === index && (
                <div
                  className="absolute bottom-0 left-0 right-0 bg-black text-center py-3 mx-3 border-t-4 border-gray-700 "
                  style={slideInAnimation} 
                >
                  <p className="text-xl text-white font-semibold mt-7 font-Oswald"> {item.name} </p> <br /> <p className='text-white text-base font-Roboto'>GYM TRAINER</p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTeam;
