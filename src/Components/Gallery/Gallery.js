// Gallery.js
import React, { useState } from 'react';
import Headingpage from '../Pages/Headingpage';
import imageurl from '../Images/headerimg3.jpg';
const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D/300x400',
    'https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg',
    'https://media.istockphoto.com/id/1155231782/photo/asian-adult-man-working-out-at-the-gym.jpg?s=612x612&w=0&k=20&c=UDSfpLkxzxAFH11uar6FJkRIGB2Muf0AgayjPn4rJOc=',
    'https://images.pexels.com/photos/6514823/pexels-photo-6514823.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7674484/pexels-photo-7674484.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6999241/pexels-photo-6999241.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7674483/pexels-photo-7674483.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7991921/pexels-photo-7991921.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1886487/pexels-photo-1886487.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Headingpage title={"Gallery"} ThisPage={"Gallery"} img={imageurl} />
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2">
          {currentImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden">
              <img
                src={image}
                alt={`Img ${startIndex + index + 1}`}
                className="w-full h-full rounded transition-transform duration-300 transform hover:scale-110"
                style={{ transformOrigin: 'center center' }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              className={`mx-2 px-4 py-2 rounded-full ${page + 1 === currentPage ? 'bg-white text-black' : 'bg-gray-800'
                }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
