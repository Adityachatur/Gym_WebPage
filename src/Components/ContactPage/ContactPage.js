import React from 'react'
import Headingpage from '../Pages/Headingpage'
import DetailSend from './DetailSend'
import GoogleLocation from './GoogleLocation'
import Footer from '../HomePage/Footer'
import imageurl from '../Images/headerimg4.jpg'
const ContactPage = () => {
    return (
        <div>
            <Headingpage title={"Contact Page"} ThisPage={"Contact"} img={imageurl} />
            <DetailSend />
            <GoogleLocation />
            <Footer />

        </div>
    )
}

export default ContactPage
