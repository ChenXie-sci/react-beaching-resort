import React from 'react'
import Hero  from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import Services from "../components/Services.js"
import FeaturedRooms from '../components/FeaturedRooms'
import Button from '../components/StyledHero'


function Home() {
    return (
        <div>
            <>
            <Hero>
                <Banner title="luxurious rooms" subtilte="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            <Button >Hello</Button>
            </>
        </div>
    )
}

export default Home

