
const Pageheading = ({title,discription}) => {
    return (
        <div className="my-32 text-center">
            <h1 className="text-[#1A1919] text-5xl font-bold">{title}</h1>
            <p className="text-[#757575] text-base font-medium mt-4">{discription}</p>
        </div>
    );
};

export default Pageheading;