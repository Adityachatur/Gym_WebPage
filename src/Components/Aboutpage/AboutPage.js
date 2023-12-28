import React from 'react'
import Headingpage from '../Pages/Headingpage'
import WhyChoosecard from '../HomePage/WhyChoosecard'
import WhyChoseAbout from './WhyChoseAbout'
import OurTeam from '../HomePage/OurTeam'
import ClientReview from './ClientReview'
import Footer from '../HomePage/Footer'
import Contact from '../HomePage/Contact'
import imageurl from '../Images/headerimg3.jpg'
const AboutPage = () => {

  return (
    <div>
         <Headingpage title={"About page"} ThisPage={"About"} img={imageurl} />
         <WhyChoosecard/>
         <WhyChoseAbout/>
         <OurTeam/>
         <ClientReview/>
         <Contact/>
        <Footer/>
    </div>
  )
}

export default AboutPage
