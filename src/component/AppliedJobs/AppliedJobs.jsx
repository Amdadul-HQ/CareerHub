import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLoaclStorage } from "../../Utlity/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {

    const jobs = useLoaderData()
    const [appliedJobs,setAppliedJobs] = useState([])


    useEffect(() => {
        const storedId = getLoaclStorage()
        if(jobs.length){
            const jobsApplied = jobs.filter( job => storedId.includes(job.id) )
            setAppliedJobs(jobsApplied)
        }
    },[])

    return (
        <section className="max-w-screen-xl mx-auto">
                <h1 className="text-center text-[#1A1919] mb-32 text-3xl font-bold">Applied Jobs</h1>
                <div className="space-y-6">
                    {
                        appliedJobs.map( appliedjob => <AppliedJob key={appliedjob.id} appliedjob={appliedjob}></AppliedJob> )
                    }
                </div>
        </section>
    );
};

export default AppliedJobs;