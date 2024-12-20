import React, { useEffect } from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Services_hero from '../Components/Services/Services_hero'
import Service_Main from '../Components/Services/Service_Main'
  
const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Topbar/>
            <Navbar/>
            <Services_hero/>
            <Service_Main/>
            <Footer/>  
        </>
    )
}

export default Services