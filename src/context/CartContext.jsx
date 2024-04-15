/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../components/Reducer/CartReducer";


const CartContext = createContext();

const getLocalCartData = () =>{
    let localCartData = localStorage.getItem("rushikesh");
    if(!localCartData){
         return [];
    }else{
        return JSON.parse(localCartData);
    }
};

const initialState ={
    // cart:[],
    cart: getLocalCartData(),
    total_item:0,
    total_amount:1000,
    shipping_fee:5000,

};

const CartProvider =({children})=>{
    
    const[state,dispatch] = useReducer(reducer,initialState);

    const addToCart=(id,Products,amount)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,Products,amount}});

    }

    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id});
    }

    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }

    const setDecrease=(id)=>{
        dispatch({type:"SET_DECREASE",payload:id})
        
    }
    const setIncrease=(id)=>{
        dispatch({type:"SET_INCREASE",payload:id})

    }

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type:"CART_TOTAL_PRICE"});
        localStorage.setItem("rushikesh", JSON.stringify(state.cart));
    },[state.cart])


    return <CartContext.Provider 
    value={{...state,
            addToCart,
            removeItem,
            clearCart,
            setDecrease,
            setIncrease}}>

        {children}
    </CartContext.Provider>
}

const useCartContext =()=>{
    return useContext(CartContext)
}

export {CartProvider, useCartContext};