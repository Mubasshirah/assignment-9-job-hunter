
import './FeaturedJobDetails.css'
import { useLoaderData } from 'react-router-dom';
const FeaturedJobDetails = () => {
    const data=useLoaderData();
    
    return (
        <div>
         <h1>this is featured job details:{data.name}</h1>
        </div>
    );
};

export default FeaturedJobDetails;