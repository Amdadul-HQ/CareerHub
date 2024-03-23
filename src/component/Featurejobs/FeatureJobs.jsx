import { useEffect, useState } from "react";
import Pageheading from "../PageHeading/Pageheading";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect( () => {
        fetch('jobs.json')
        .then( res => res.json())
        .then( data => setJobs(data))
    } ,[])
    
    return (
        <section >
            <Pageheading title='Featured Jobs'
             discription='Explore thousands of job opportunities with all the information you need. Its your future'>
             </Pageheading>
             <div className="grid  grid-cols-2 gap-6">
             {
                jobs.map(job => <FeatureJob key={job.id} job={job} ></FeatureJob>)
             }
             </div>
        </section>
    );
};

export default FeatureJobs;