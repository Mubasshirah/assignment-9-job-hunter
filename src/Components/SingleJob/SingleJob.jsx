import React from 'react';
import './SingleJob.css'
const SingleJob = ({job}) => {
    const {name,id,picture, availability}=job;
    return (
        <div className='singleJOb'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default SingleJob;