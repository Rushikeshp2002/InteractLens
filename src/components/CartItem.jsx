import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
// import { useState } from "react";

const CartItem =(myValues)=>{
    const {id,name,image,price,amount} = myValues;
    const {removeItem ,setDecrease,setIncrease} = useCartContext();
    
   

    return(
        
        <div className="grid grid-cols-4 md:my-10 md:mx-30 place-items-center p-1">
            <div className="inline-flex md:w-full place-items-center">
                <img src={image} alt="img" className="md:w-[3rem] rounded shadow-md"/>
                <p className="md:mx-3">{name}</p>
            </div>

            <div>
                <p><FormatPrice price={price}/></p>
            </div>

            <div>
            {< CartAmountToggle 
            amount={amount} 
               setDecrease={()=>setDecrease(id)}  
                 setIncrease={()=>setIncrease(id)}/>}
            </div>

            <button>
                <FaTrash className="" size={"1.2rem"} fill="red" onClick={()=> removeItem(id)}/>
            </button>
        </div>

       

        
        
    )
}

export default CartItem;