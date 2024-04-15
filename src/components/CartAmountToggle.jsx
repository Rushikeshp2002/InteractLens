import { FaMinus,FaPlus } from "react-icons/fa";
const CartAmountToggle =({amount , setIncrease, setDecrease})=>{
    return(
         <div className="flex w-20 rounded justify-between p-1">
           <button className="bg-red-500 rounded-full p-1 text-white" onClick={()=>setDecrease()}><FaMinus/></button>
           <div>{amount}</div>
           <button className="bg-green-500 rounded-full p-1 "onClick={()=>setIncrease()}><FaPlus/></button>
         </div>
    )
}

export default CartAmountToggle;