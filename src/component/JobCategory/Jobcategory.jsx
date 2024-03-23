import { useEffect, useState } from "react";
import Pageheading from "../PageHeading/Pageheading";
import Category from "../Category/Category";

const Jobcategory = () => {
    const [categories,setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then( res => res.json())
        .then( data => setCategories(data))
    },[])
    return (
      <section className="max-w-screen-xl mx-auto">
        <Pageheading title='Job Category List' 
        discription='Explore thousands of job opportunities with all the information you need. Its your future'>
        </Pageheading>
        <div className="grid grid-cols-4 gap-x-6">
            {
                categories.map( categorie => <Category key={categorie.id} categorie={categorie} ></Category> )
            }
        </div>
      </section>
    );
};

export default Jobcategory;