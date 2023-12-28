import React from 'react'
import Headingpage from '../Pages/Headingpage'
import WhatWeDo from './WhatWeDo'
import Priceboxcard from '../HomePage/Priceboxcard'
import Contact from '../HomePage/Contact'
import Footer from '../HomePage/Footer'
import imageurl from '../Images/headerimg2.jpg'
import Bmical from './Bmical'
const ServicePage = () => {
  return (
    <div>
     <Headingpage title={"Service Page"} ThisPage={"Service"} img={imageurl}/>
     <WhatWeDo/>
     <Priceboxcard/>
     <Bmical/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default ServicePage
