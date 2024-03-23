

const Category = ({categorie}) => {
    const {logo,category_name,availability} =categorie
    return (
        <div className="bg-gradient-to-t from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)] rounded-lg p-10">
            <div>
                <img className="bg-gradient-to-t from-[rgba(126,144,254,0.10)] to-[rgba(152,115,255,0.10)] p-4 rounded-lg" src={logo} alt="" />
            </div>
            <h3 className="text-[#474747] text-xl font-bold mt-8">{category_name}</h3>
            <p className="text-[#A3A3A3] text-base font-medium mt-2">{availability}</p>
        </div>
    );
};

export default Category;