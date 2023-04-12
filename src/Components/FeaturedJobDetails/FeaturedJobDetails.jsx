
import { useEffect, useState } from 'react';
import './FeaturedJobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
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
            const userData = data.find((user) => user.id == id);
            setUser(userData);
            console.log(userData)
        };

        fetchData();
    }, [id]);
    console.log(user)


    return (
        <div>
            <h2 className='featured-h2'>Job Details</h2>
            <div className='FeaturedJobDetails'>
                <div className='FeaturedJobDetailsLeft'>
                    {
                        user ?
                            <div>
                                <p><strong>Job Description: </strong>{user.jobDescription}</p>
                                <p><strong>Job Responsibility: </strong> {user.jobResponsibility}</p>
                                <p><strong>Educational Requirments:</strong> </p>
                                <p>{user.educationalQualification}</p>
                                <p><strong>Experience:</strong></p>
                                <p>{user.jobExperience}</p>
                            </div>
                            :
                            <div>No data found</div>
                    }
                </div>

                <div className='FeaturedJobDetailsRight'>
                    <div>
                        {
                            user ?
                           
                                <div>
                                    <h3>Job Details</h3>
                                    <hr />
                                    <p><strong>Salary:</strong>{user.jobTitle}</p>
                                    <p><strong>Job Title:</strong>{user.salaryRange}</p>
                                    <h3>Contact Info.</h3>
                                    <hr />
                                    <p><strong>Phone: </strong>{user.phone}</p>
                                    <p><strong>Email: </strong>{user.email}</p>
                                    <p><strong>Address: </strong>{user.location}</p>

                                </div>
                                :
                                <div></div>
                        }
                    </div>
                    <div>
                        <button className='btn-feature'>Apply Now</button>
                    </div>
                </div>





            </div>

        </div>
    );
};

export default FeaturedJobDetails;