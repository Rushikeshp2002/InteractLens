import { Link } from "react-router-dom";
import FormatPrice from "../../Helper/FormatPrice";
// import AddToCart from "../AddToCart";
// import SingleProduct from "./SingleProduct";

const API = "http://127.0.0.1:8000/products/data";
export const ProductCard = (curEll) => {
    const {product_name,id,images,price,category} = curEll;




    // console.log(`http://127.0.0.1:8000${images[0]}`);
  return (
   <Link to={`/singleproduct/${id}`}>
     <div className="w-[18rem] h-96 bg-white  mx-5 my-4 rounded-2xl shadow-xl">
            <div className="Top flex m-auto" >
             <img className="w-[18rem] h-48 object-contain rounded-t-2xl " src={`http://127.0.0.1:8000${images[0]}`} alt="Img" />
            </div>
            <div className="bottom p-5">
              <div className="title w-full text-lg font-semibold">{product_name}</div>
              <div className="description text-base font-light">{category}</div>
                <div className="pricing text-xl text-blue-700">{<FormatPrice price={price}/>}</div>
                <div className="btnSection flex flex-row w-full justify-evenly align-middle h-auto my-3 ">
                  <button  className="border-2 md:w-[10vw] h-auto p-1 rounded-md bg-blue-500 text-white text-lg font-normal transition ease-in hover:scale-105 hover:bg-indigo-500 duration-100">Buy Now </button>
                  <button  className="border-2 font-normal  md:w-[10vw] h-auto p-1 mx-3 rounded-md bg-gray-300 text-black text-lg  transition ease-in hover:scale-105 duration-100 hover:bg-yellow-500">Add to Cart</button>
                  {/* <AddToCart Products={SingleProduct}/> */}
                </div>
                
            </div>
        </div>
    </Link>
  )
}
