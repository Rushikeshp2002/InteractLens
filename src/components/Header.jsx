import logo from "../Assets/flipkart-plus_8d85f4.png";
import { Link } from "react-router-dom";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {HiSearch} from "react-icons/hi";
import {HiMenu} from "react-icons/hi";
import { useState } from "react";
import {MdClose} from "react-icons/md";
import { useFiltercontext } from "../context/FilterContex";
import { useCartContext } from "../context/CartContext";




const Header = () => {
  const[isOpen,setIsOpen] = useState(false);
  const {total_item} = useCartContext();
  const {
     filters:{text},
     updateFilterValue,} = useFiltercontext() ;


  const Open =()=>{
    const some = document.getElementById("nav")
    some.style.display ="flex";
    some.style.margin ="auto";
    some.style.height="60vh";
    some.style.flexDirection = "column";
    some.style.justifyContent ="space-around";
    some.style.alignItems ="middle";
    some.style.transition ="ease-in-out";
    some.style.transitionDuration="500s";
    const ulEl = document.getElementById("ul");
    ulEl.style.display = "flex";
    ulEl.style.flexDirection = "column";
    
  }
  const Close=()=>{
    const some = document.getElementById("nav")
    some.style.display ="none";
    const ulEl = document.getElementById("ul");
    ulEl.style.display = "flex";
    ulEl.style.flexDirection = "row";
  }
  
  return (
    <div className="md:w-2/3 md:h-auto m-auto rounded-full flex flex-row bg-gray-900 bg-opacity-80  mt-5  py-1 w-[800px] scrollbar-hide justify-center items-center z-30">
      <ul id="ul" className="md:w-screen flex flex-row justify-center align-middle items-center">
       <div className="md:flex md:flex-row md:justify-center flex">
         <li className="px-5 py-1 mt-1">
          <Link to="/">
              <img src={logo} alt="Flipkart-Logo" className="md:w-24 w-24" />
              <p className="italic text-white text-lg">
                Explore <span className="text-yellow-300">Plus+</span>
              </p>
          </Link>
         </li>
         <li className="px-5 flex flex-row-reverse">
          <form onSubmit={(e)=> e.preventDefault()}>
            <input
             type="text" 
             name="text"  
             value={text}
              onChange ={updateFilterValue}
              placeholder="Search here..." className="transition ease-in-out delay-150 md:w-[20rem] w-[33rem] h-10 md:hover:scale-105 duration-200 rounded-full p-3 md:px-5 md:my-3 my-3" />
          </form>
            <HiSearch className="md:absolute  md:mx-3 md:my-4 absolute mx-2 my-5 hover:scale-95" size="1.8rem" color="blue"/>
         </li>
       </div>
       <div id="nav" className="hidden md:flex md:flex-row transition ease-in duration-700">
        <li className="px-2 py-3 md:text-lg font-normal text-white transition ease-in delay-75 hover:scale-95"><Link to="/account">My Account</Link></li>
        <li className="px-5 py-3 md:text-lg font-normal text-white transition ease-in delay-75 hover:scale-95"><Link to="/allproducts">All Products</Link></li>
        <li className="px-5 py-3 md:text-lg font-normal text-white transition ease-in delay-75 hover:scale-95"><Link to="/login">Login</Link></li>
        <li className="px-1 py-3 md:text-lg font-normal text-white flex transition ease-in delay-75 hover:scale-110">
           
           <Link to="/cart" className="flex group"><HiOutlineShoppingCart size="1.8rem"/>Cart
           <div className="text-[10px] bg-white rounded-full w-4 h-4 grid items-center  text-black  group-hover:bg-black group-hover:text-white   place-content-center">
            {total_item}
           </div>
           </Link>
         
        </li>
       </div>
        
      </ul>
      <button id="open" className="md:hidden" onClick={()=>setIsOpen(isOpen?false:true)}>
        {
          isOpen?<MdClose size={40}  className="text-white absolute top-8" onClick={Close}/>:<HiMenu size={40} className="text-white" onClick={Open}/>
        }
      </button>
      
    
    </div>
  );
};

export default Header;
