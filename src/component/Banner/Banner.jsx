import user from '../../../public/assets/images/user.png'

const Banner = () => {
    return (
        <section className='max-w-screen-xl mx-auto flex justify-between h-[655px]'>
            <div className='mt-28'>
                <h1 className='text-[#1A1919] leading-[80px] text-7xl font-bold'>One Step <br /> Closer To Your <br /><span className='text-[#9873FF]'>Dream Job</span></h1>
                <p className='mt-6 max-w-[520px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="mt-8 text-white text-xl font-bold px-7 py-4 rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
            </div>
            <div className='flex-grow relative'>
                <img className='h-full absolute right-0' src={user} alt="" />
            </div>
        </section>
    );
};

export default Banner;