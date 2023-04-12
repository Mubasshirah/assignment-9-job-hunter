import React from 'react';
import './SingleFeaturedJob.css';
import { Link } from 'react-router-dom';
import FeaturedJobDetails from '../FeaturedJobDetails/FeaturedJobDetails';
const SingleFeaturedJob = ({job}) => {
    const {id,jobTitle,jobType,location,name, picture,salaryRange, time}=job;
    return (
        <div className='SingleFeaturedJob'>
            <img src={picture} alt="" />
            <h4>{jobTitle}</h4>
            <p>{name}</p>
            <button className='type'>{jobType}</button> <button className='time'>{time}</button>
            <p><span>{location}</span> <span className='span'>{salaryRange}</span></p> 
            <Link to={`/job/${id}`}><button  className='details'>View Details</button></Link>
           
            
        </div>
    );
};

export default SingleFeaturedJob;