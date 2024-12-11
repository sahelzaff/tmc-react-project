import React, { useEffect } from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Consultant_Hero from '../Components/Consultant/Consultant_Hero'
import Consultant_Intro from '../Components/Consultant/Consultant_Intro'
import Consultant_Services from '../Components/Consultant/Consultant_Services'
import Success_Stories from '../Components/Consultant/Success_Stories'

const Consultant = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Topbar />
            <Navbar />
            <Consultant_Hero />
            <Consultant_Intro />
            <Consultant_Services />
            {/* <Success_Stories /> */}
            <Footer />
        </>
    )
}

export default Consultant 