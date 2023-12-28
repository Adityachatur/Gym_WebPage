import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import trainer1 from '../Images/trainer1.jpg';
import trainer2 from '../Images/trainer2.jpg';
import trainer4 from '../Images/trainer4.jpg';
import trainer5 from '../Images/trainer5.jpg';
import trainer7 from '../Images/trainer7.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, } from '@fortawesome/free-regular-svg-icons';

const ClientReview = () => {
  const cardData = [
    { imageUrl: trainer1, name: 'Client 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam accusamus maiores dolore, modi repellendus beatae eveniet cumque sed tenetur!' },
    { imageUrl: trainer2, name: 'Client 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam accusamus maiores dolore, modi repellendus beatae eveniet cumque sed tenetur!' },
    { imageUrl: trainer4, name: 'Client 3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam accusamus maiores dolore, modi repellendus beatae eveniet cumque sed tenetur!' },
    { imageUrl: trainer5, name: 'Client 4', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam accusamus maiores dolore, modi repellendus beatae eveniet cumque sed tenetur!' },
    { imageUrl: trainer7, name: 'Client 5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam accusamus maiores dolore, modi repellendus beatae eveniet cumque sed tenetur!' },
    // Add more image URLs and names as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  return (
    <div>

      <div className='my-20'>
        <div className=' text-center pt-20 pb-5'>
          <p className='text-orange-800 lg:text-2xl text-lg'>Testimonial</p>
          <h1 className='text-white lg:text-3xl text-lg uppercase'>OUR CLIENT SAYS</h1>
        </div>
        <div className='lg:w-2/3 w-3/4 mx-auto'>
          <Slider {...settings}>
            {cardData.map((item, index) => (
              <div key={index} className="relative mt-14">
                <div className="mx-3 p-2 h-2/3 shadow-md flex flex-col items-center justify-center">
                  <img
                    src={item.imageUrl}
                    alt={`Team Member ${index + 1}`}
                    className="w-52 h-52 object-cover rounded-full my-2"
                  />
                  <div className='text-white text-base text-center my-4'>{item.content}</div>
                  <div className='text-white text-2xl font-bold'>{item.name}</div>

                  <div className='text-yellow-700 staricon flex space-x-2 text-2xl my-2'><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
