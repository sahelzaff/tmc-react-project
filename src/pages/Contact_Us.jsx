import React, { useEffect } from 'react' 
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact_Main from '../Components/Contact_Components/Contact_Main'


const Contact_Us = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Topbar />
            <Navbar />
            <Contact_Main/>
            <Footer />
        </>
    )
}

export default Contact_Us