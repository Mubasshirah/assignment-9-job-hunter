import React from 'react';
import './SingleFeaturedJob.css';
const SingleFeaturedJob = ({job}) => {
    const {id,jobTitle,jobType,location,name, picture,salaryRange, time}=job;
    return (
        <div className='SingleFeaturedJob'>
            <img src={picture} alt="" />
            <h4>{jobTitle}</h4>
            <p>{name}</p>
            <button className='type'>{jobType}</button> <button className='time'>{time}</button>
            <p><span>{location}</span> <span className='span'>{salaryRange}</span></p> 
            <button className='details'>View Details</button>
        </div>
    );
};

export default SingleFeaturedJob;