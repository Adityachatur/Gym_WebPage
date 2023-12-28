import React, { useState } from 'react';
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dropdowndata = () => {
  const [showArrows, setShowArrows] = useState(false);

  const handleAngleDownClick = () => {
    setShowArrows(!showArrows);
  };

  return (
    <div>
      <div className="relative">
        <p className="text-orange-800 text-2xl font-Oswald">
          Membership Plan
          <span onClick={handleAngleDownClick}>
            <FontAwesomeIcon icon={showArrows ? faMinus : faAdd} className='ml-5' />
          </span>
        </p>

        {showArrows && (
          <div className="absolute top-8 w-full h-96 lg:w-60 left-1/2 transform -translate-x-1/2 text-white animate-fade-in">
            <div className='text-xl font-Oswald space-y-4 mt-4'>
              <p>21 Day Membership</p>
              <p>3 Month Membership</p>
              <p>6 Month Membership</p>
              <p>1 Year Membership</p>
              <p>3 Years Day Membership</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdowndata;
