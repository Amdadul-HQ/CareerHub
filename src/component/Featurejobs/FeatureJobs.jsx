import { useEffect, useState } from "react";
import Pageheading from "../PageHeading/Pageheading";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showJobs,setShowJobs] = useState(4)
    useEffect( () => {
        fetch('jobs.json')
        .then( res => res.json())
        .then( data => setJobs(data))
    } ,[])
    
    return (
        <section className="max-w-screen-xl mx-auto">
            <Pageheading title='Featured Jobs'
             discription='Explore thousands of job opportunities with all the information you need. Its your future'>
             </Pageheading>
             <div className="grid  grid-cols-2 gap-6">
             {
               jobs.slice(0,showJobs).map(job => <FeatureJob key={job.id} job={job} ></FeatureJob>)
             }
             </div>
            <div className="flex justify-center">
            <button onClick={ () => setShowJobs(jobs.length)} className={`text-white text-xl font-bold px-7 py-4 justify-center rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-6 ${showJobs == jobs.length ? 'hidden' : ''}`}>See All Jobs</button>
            </div>
        </section>
    );
};

export default FeatureJobs;