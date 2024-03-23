import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLoaclStorage } from "../../Utlity/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {

    const jobs = useLoaderData()
    const [appliedJobs,setAppliedJobs] = useState([])
    const[displayJobs,setDisplayJobs] = useState([])

    const handleFilterJobs = filter => {
        if(filter =="all"){
            setDisplayJobs(appliedJobs)
        }
        else if(filter == "Remote"){
            const remoteJobs = appliedJobs.filter( appliedJob => appliedJob.remote_or_onsite ==='Remote')
            setDisplayJobs(remoteJobs)
        }
        else if( filter =='Onsite'){
            const onsiteJobs = appliedJobs.filter( appliedJob => appliedJob.remote_or_onsite ==='Onsite' )
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedId = getLoaclStorage()
        if(jobs.length){
            const jobsApplied = jobs.filter( job => storedId.includes(job.id) )
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    },[])

    return (
        <section className="max-w-screen-xl mx-auto">
                <h1 className="text-center text-[#1A1919] mb-32 text-3xl font-bold">Applied Jobs</h1>
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilterJobs('all')}><a>All</a></li>
                        <li onClick={() => handleFilterJobs('Remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilterJobs('Onsite')}><a>OnSite</a></li>
                    </ul>
                    </details>
                <div className="space-y-6">
                    {
                        displayJobs.map( appliedjob => <AppliedJob key={appliedjob.id} appliedjob={appliedjob}></AppliedJob> )
                    }
                </div>
        </section>
    );
};

export default AppliedJobs;