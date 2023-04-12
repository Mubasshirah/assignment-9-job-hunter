import React from 'react';
import './HomeBanner.css';
import image from '../../assets/assets/All Images/P3OLGJ1 copy 1.png';
const HomeBanner = () => {
    return (
        <div className='home-banner'>
            <div className='home-banner-left'>
             <h1>One Step</h1>
             <h1>Ahead to Choose Your</h1>
             <h1 className='third-h1'>Dream Job</h1>
             <p>Explore thousands of job opportunities with all <br /> the information you need.</p>
             <button>Get Started</button>
            </div>
            <div className='home-banner-right'> 
               <img className='img' src={image} alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;