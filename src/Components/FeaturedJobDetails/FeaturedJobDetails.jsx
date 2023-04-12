
import { useEffect, useState } from 'react';
import './FeaturedJobDetails.css'
import {  useLoaderData, useParams } from 'react-router-dom';
const FeaturedJobDetails = () => {
    
    const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('featuredJob.json');
      const data = await response.json();
      console.log(data);
      const userData = data.find((user) => user.id === Number(userId));
      setUser(userData);
    };

    fetchData();
  }, [userId]);
   
 
    
    return (
        <div>
        
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <div>Loading user data...</div>
      )}
   
        
        </div>
    );
};

export default FeaturedJobDetails;