import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
const FeatureJob = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
            <h1>{job_title}</h1>
            <p>{company_name}</p>
            <div>
            <button>{remote_or_onsite}</button>
            <button>{job_type}</button>
            </div>
            <div>
                <p><CiLocationOn></CiLocationOn> {location}</p>
                <p><AiOutlineDollarCircle></AiOutlineDollarCircle>{salary}</p>
            </div>
        </div>
    );
};

export default FeatureJob;