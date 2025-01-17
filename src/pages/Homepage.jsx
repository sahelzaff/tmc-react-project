import React, { useEffect } from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Hero_Homepage from '../Components/Hero_Homepage'
import About_Company_Homepage from '../Components/About_Company_Homepage'
import Products from '../Components/Products'
import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'
import ContactHome from '../Components/ContactHome'
import Footer from '../Components/Footer'

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Topbar />
            <Navbar />
            <Hero_Homepage
            heading="Your Trusted Partner in Continuous Casting Machines and Equipment" 
            // paragraph="High-quality products and expert consulting services for all your needs" 
            buttonText="Get Quotes" 
            />
            <About_Company_Homepage />
            <Products />
            <Services />
            {/* <Testimonial /> */}
            <ContactHome />
            <Footer />
        </>
    )
}

export default Homepage