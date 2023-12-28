import React, { useEffect, useState } from 'react';
import Header from './Header';
import WhyChoosecard from './WhyChoosecard';
import Classes from './Classes';
import InfoDetail from './InfoDetail';
import Priceboxcard from './Priceboxcard';
import OurTeam from './OurTeam';
import Contact from './Contact';
import Footer from './Footer';
import {InfinitySpin } from 'react-loader-spinner';
// import Sampleworkoutimg from './Sampleworkoutimg';

const Homepage = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        setloading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        // Show a loading indicator while loading
        <div className="flex flex-col items-center justify-center h-screen">
          <div className='flex items-center loading'>
            <InfinitySpin height={40} color='white' />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <WhyChoosecard />
          <Classes />
          <InfoDetail />
          <Priceboxcard />
          {/* <Sampleworkoutimg /> */}
          <OurTeam />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Homepage;
