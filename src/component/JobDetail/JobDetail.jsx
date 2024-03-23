import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveToLocalStorage } from '../../Utlity/localstorage';


const JobDetail = () => {
    const jobs = useLoaderData()
    const {Id} = useParams()
    // console.log(jobs,Id);
    const job = jobs.find( j => j.id == Id )
    const {id,logo,job_title,job_description,job_responsibility,educational_requirements,experiences,contact_information,salary,remote_or_onsite,company_name,location,job_type} = job
    const handleApplyJob = (id) =>{
        toast.success('Application Successful')
        saveToLocalStorage(id)
    }
    return (
       <section className='max-w-screen-xl mx-auto'>
            <h1 className='text-center text-[#1A1919] mb-32 text-3xl font-bold'>Job  Details</h1>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex gap-x-6'>
                <div className='max-w-[870px]'>
                    <h3 className='leading-10 text-[#757575] text-base font-medium'><span className='text-base text-[#1A1919] font-bold '>Job Description:</span> {job_description}</h3>
                    <h3 className='leading-10 mt-6 text-[#757575] text-base font-medium'><span className='text-base text-[#1A1919] font-bold '>Job Responsibility:</span> {job_responsibility}</h3>
                    <h3 className='text-base text-[#1A1919] font-bold mt-6'>Educational Requirements:</h3>
                    <p className=' text-[#757575] text-base font-medium'>{educational_requirements}</p>
                    <h3 className='text-base text-[#1A1919] font-bold mt-6'>Experiences:</h3>
                    <p className=' text-[#757575] text-base font-medium'>{experiences}</p>
                </div>
                <div>
                    <div className='p-7 bg-[rgba(126,144,254,0.10)] rounded-lg'>
                    <h3 className='text-[#1A1919] text-xl font-bold py-6'>Job Details</h3>
                    <hr />
                    <p className='text-[#474747] font-bold text-lg mt-4 flex items-center flex-row'><AiOutlineDollar className="text-2xl text-[#9873FF]"></AiOutlineDollar> Salary: <span className='text-[#757575] text-lg font-medium'>{salary}(Per Month)</span></p>
                    <p className='text-[#474747] font-bold text-lg mt-4 flex items-center flex-row'><HiOutlineCalendarDays className="text-2xl text-[#9873FF]"></HiOutlineCalendarDays> Job Title: <span className='text-[#757575] text-lg font-medium'>{job_title}</span></p>
                    <h3 className='text-[#1A1919] text-xl font-bold py-6'>Contact Information</h3>
                    <hr />
                    <p className='text-[#474747] font-bold text-lg mt-4 flex items-center flex-row'><BsTelephone className="text-2xl text-[#9873FF]"></BsTelephone>Phone : <span className='text-[#757575] text-lg font-medium'>{contact_information.phone}</span></p>
                    <p className='text-[#474747] font-bold text-lg mt-4 flex items-center flex-row'><MdOutlineEmail className="text-2xl text-[#9873FF]"></MdOutlineEmail>Email : <span className='text-[#757575] text-lg font-medium'>{contact_information.email}</span></p>
                    <p className='text-[#474747] font-bold text-lg mt-4 flex items-center flex-row'><CiLocationOn className="text-2xl text-[#9873FF]"></CiLocationOn>Address : <span className='text-[#757575] text-lg font-medium'>{contact_information.address}</span></p>
                    </div>
                <button className="text-white text-xl font-bold w-full mt-6 py-4 rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF]" onClick={() => handleApplyJob(id)}>Apply Now</button>
                     <ToastContainer></ToastContainer>
                </div>
            </div>
       </section>
    );
};

export default JobDetail;