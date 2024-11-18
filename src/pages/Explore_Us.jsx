import React, { useEffect } from 'react' 
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Explore_Hero from '../Components/Explore_Components/Explore_Hero'
import Explore_team from '../Components/Explore_Components/Explore_team'
import Explore_team_card from '../Components/Explore_Components/Explore_team_card'
import Explore_Contact from '../Components/Explore_Components/Explore_Contact'

const Explore_Us = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Topbar/>
            <Navbar/>
            <Explore_Hero/>
            <Explore_team/>
            <Explore_team_card/>
            <Explore_Contact/>
            <Footer/>
            
        </>
    )
}

export default Explore_Us