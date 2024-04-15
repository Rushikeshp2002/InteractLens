import { Link } from "react-router-dom";
import FormatPrice from "../../Helper/FormatPrice";

const CardHome =(curEl) =>{

  const {product_name,id,images,price,brand} = curEl;
    const Bought =()=>{
      console.log("Bought")
    }
    const Added =()=>{
      console.log("Added")
    }
    return(
       <Link to={`/singleproduct/${id}`}>
        <div className="w-[18rem] h-auto bg-white  mx-5 my-4 rounded-2xl shadow-xl  scrollbar-hide">
            <div className="Top flex m-auto  scrollbar-hide" >
             <img className="w-full h-[14rem] object-cover rounded-t-2xl" src={`http://127.0.0.1:8000/${images}`} alt="Img" />
            </div>
            <div className="bottom p-5">
              <div className="title w-full text-lg font-semibold">{product_name}</div>
              <div className="description text-base font-light">{brand}</div>
                <div className="pricing text-xl text-blue-700"><FormatPrice price={price}/></div>
                <div className="btnSection flex flex-row w-full justify-between align-middle h-auto my-3 ">
                  <button onClick={Bought} className="border-2 md:w-[10vw] h-auto p-1 rounded-md bg-blue-500 text-white text-lg font-normal transition ease-in hover:scale-105 hover:bg-indigo-500 duration-100">Buy Now </button>
                  <button onClick={Added} className="border-2 font-normal  md:w-[10vw] h-auto p-1 mx-3 rounded-md bg-gray-300 text-black text-lg  transition ease-in hover:scale-105 duration-100 hover:bg-yellow-500">Add to Cart</button>
                </div>
            </div>
        </div>
       </Link>
    )
}

export default CardHome;