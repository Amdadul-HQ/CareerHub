import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetail = () => {
    const jobs = useLoaderData()
    const {Id} = useParams()
    console.log(jobs,Id);
    return (
        <div>
            <h1>Hellp from Job Details</h1>
        </div>
    );
};

export default JobDetail;