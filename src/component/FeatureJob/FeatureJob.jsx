import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
const FeatureJob = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job
    return (
        <div className="border p-10 rounded-lg">
            <div>
                <img src={logo} alt="" />
            </div>
            <h1 className="text-[#474747] text-2xl font-bold mt-8">{job_title}</h1>
            <p className="text-[#757575] text-xl font-semibold mt-2">{company_name}</p>
            <div className="text-[#9873FF] text-base font-bold flex gap-x-4 mt-4">
            <button className="px-5 py-2 rounded border border-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 rounded border border-[#7E90FE]">{job_type}</button>
            </div>
            <div className="text-[#757575] text-xl font-medium flex gap-x-6 mt-4">
                <p className="flex items-center"><CiLocationOn className="text-2xl"></CiLocationOn> {location}</p>
                <p className="flex items-center"><AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>{salary}</p>
            </div>
            <button className="text-white text-xl font-bold px-7 py-4 rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-6">View Details</button>
        </div>
    );
};

export default FeatureJob;