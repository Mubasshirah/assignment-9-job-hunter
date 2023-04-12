import React from 'react';
import './Home.css'
import HomeBanner from '../HomeBanner/HomeBanner';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import JobCategory from '../JobCategory/JobCategory';
const Home = () => {
   
    return (
        <div>
           <HomeBanner></HomeBanner>
           <JobCategory></JobCategory>
           <FeaturedJob ></FeaturedJob>
        </div>
    );
};

export default Home;