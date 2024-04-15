import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { useProductContext } from "../../context/ProductContext";
import FormatPrice from "../../Helper/FormatPrice";
import Star from "../Star";
import AddToCart from "../AddToCart";

const API = "http://127.0.0.1:8000/products/data";

const SingleProduct=()=>{
    const { getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
    const {id} = useParams();
    

    const userData = JSON.parse(localStorage.getItem('login'));
    // setSomething(userData);
    // console.log(userData.id);
  
    
    // const{id:alias,name,company,price,description,image,stars} = singleProduct;
   
    

    useEffect(()=>{
          getSingleProduct(`${API}/${id}`);
        
      },[]);
      
      if(isSingleLoading) {
        return<div className="md:h-[80vh] grid place-items-center text-5xl"></div>
      }
      const{id:alias,product_name,product_description,brand,price,rating,images} = singleProduct;
      // console.log(singleProduct);
      // console.log(alias);
    

    return(


        <section className="text-gray-700 body-font overflow-hidden bg-white md:w-auto w-[49rem]">
          
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover rounded border border-gray-200" src={`http://127.0.0.1:8000/${images}`}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product_name}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{brand}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Star stars={rating}/>
                </span>
                
              </div>
              <p className="leading-relaxed">{product_description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3"></span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse">
                <AddToCart Products={singleProduct} ProductsId={alias}/>
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-2 relative left-20  focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
                <span className="title-font font-medium text-2xl text-gray-900">{<FormatPrice price={price}/>}</span>
                
              </div>
            </div>
          </div>
        </div>
      </section>



    )
}

export default SingleProduct;