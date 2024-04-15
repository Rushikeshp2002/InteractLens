import { useEffect, useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import axios from "axios";


const AddToCart =({Products,ProductsId})=>{

    const {addToCart} = useCartContext();
    const {id} = Products;

    const [amount , setAmount] = useState(1);
    const setDecrease =()=>{
        amount > 1 ? setAmount(amount-1) : setAmount(1);
    }
    const setIncrease =()=>{
        amount < 10 ? setAmount(amount+1) : setAmount(10)
    }

    const userData = JSON.parse(localStorage.getItem('login'));
    // setSomething(userData);
    // console.log("This is user id"+userData.id);
    // console.log("This is product id"+ProductsId);
    const API = `http://127.0.0.1:8000/products/increment/${ProductsId}/${userData.id}`

    useEffect(()=>{
       const Recommender = async()=>{
        try{
            const res = await axios.get(API);
            const result = await res.result;
            // console.log(result);
            alert("API call success")
          }
          catch(error){
            alert(error);
          }
       }
       Recommender();
    },[])
      
    return(
       <div className="flex">
        <Link to="/cart" onClick={()=>addToCart(id,Products,amount)}>
        <button className="rounded w-32 h-10 bg-yellow-300 p-0 border-0  text-black ml-28">Add to Cart
                </button>
        </Link>
        </div>
    )
}

export default AddToCart;