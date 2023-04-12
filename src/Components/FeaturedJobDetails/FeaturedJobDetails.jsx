
import { useEffect, useState } from 'react';
import './FeaturedJobDetails.css'
import {  useLoaderData, useParams } from 'react-router-dom';
const FeaturedJobDetails = () => {
    
    const [user, setUser] = useState(null);
  const { id } = useParams();
console.log(id)
  useEffect(() => {
    const fetchData = async () => {
        // console.log(ud)
      const response = await fetch('/featuredJob.json');
      const data = await response.json();
      console.log(data);
      const userData = data.find((user) => user.id ==id);
      setUser(userData);
      console.log(userData)
    };

    fetchData();
  }, [id]);
   console.log(user)
 
    
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