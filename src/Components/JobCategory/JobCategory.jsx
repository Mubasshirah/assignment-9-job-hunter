import React from 'react';
import './JobCategory.css'
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';
const JobCategory = () => {
    const jobs=useLoaderData();
    return (
        <div>
            <div className="job-category-description">
            <h3>Job Category List</h3>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='allJobs'>
                {jobs.map(job=><SingleJob job={job} key={job.id}></SingleJob>)}
            </div>
        </div>
    );
};

export default JobCategory;