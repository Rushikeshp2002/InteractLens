import axios from "axios";
import {useProductContext} from "../../context/ProductContext"
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";

const FeatureProducts=()=>{
    // const {isLoading, featureProducts} = useProductContext();
    const [productArr,setProductArr] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const CategoryPro = async()=>{
        const res = await axios.get(`http://127.0.0.1:8000/products/data/`);
        const result = await res.data;
        setProductArr(result.data);
    }
    useEffect(()=>{
        CategoryPro();
    },[])
  
    console.log(productArr);

    useEffect(() => {
        if (productArr.length > 0) {
            const filteredData = productArr.filter(data => data.category === "Sports");
            setFilteredProducts(filteredData);
        }
    }, [productArr])
    
    console.log(filteredProducts); // This will log the filtered products
    
   
    return (
        <div className="md:w-screen bg-gray-200 md:flex md:flex-wrap md:justify-center p-10">
            
           
             <div className="cardsCarouselTitle md:w-[30vw] h-auto md:inline-flex flex-col justify-center align-middle p-3">
            <h1 className="text-5xl m-3 font-normal text-center ">Featured Products</h1>
            <button className="text-base font-normal h-10 md:w-1/4  w-20 absolute right-10 top-9 md:relative md:left-[38%] bg-blue-600 text-white rounded-lg transition hover:scale-90 duration-400">View All</button>
            </div>
            {
                filteredProducts.map((curEll)=>{
                   return <ProductCard key={curEll.id} {...curEll}/>;
                })
            }
        </div>
    )

}
export default FeatureProducts;