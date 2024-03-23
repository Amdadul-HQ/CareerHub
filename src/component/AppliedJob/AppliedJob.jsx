import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJob = ({appliedjob}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary} =appliedjob
    return (
        <div className="flex border rounded-lg p-7 gap-x-6">
            <div className="border rounded-lg w-60 bg-[#F4F4F4] flex justify-center items-center">
                <img className="" src={logo} alt="" />
            </div>
            <div className="space-y-5">
                <h1>{job_title}</h1>
                <p>{company_name}</p>
                <div className="text-[#9873FF] text-base font-bold flex gap-x-4 mt-4">
                    <button className="px-5 py-2 rounded border border-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 rounded border border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="text-[#757575] text-xl font-medium flex gap-x-6 mt-4">
                    <p className="flex items-center"><CiLocationOn className="text-2xl"></CiLocationOn> {location}</p>
                    <p className="flex items-center"><AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>{salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}>
           <button className="text-white text-xl font-bold px-7 py-4 rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-6">View Details</button>
           </Link>
        </div>
    );
};

export default AppliedJob;