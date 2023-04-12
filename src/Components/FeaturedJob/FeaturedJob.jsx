import React from 'react';
import './FeaturedJob.css'
import { useLoaderData } from 'react-router-dom';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';
const FeaturedJob = () => {
 const jobs=useLoaderData();

    return (
        <div >
         <div className="job-category-description">
            <h3>Featured Job</h3>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='featuredJob-container'>
      {jobs.map(job=><SingleFeaturedJob job={job} key={job.id}></SingleFeaturedJob>)}
            </div>

            <div className='feature-button'>
                <button >View All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;