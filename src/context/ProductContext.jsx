import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../components/Reducer/ProductReducer";

const AppContext = createContext();
const API = "http://127.0.0.1:8000/products/data/";

const initialState = {
  isLoading: false,
  isError: false,
  Products:[],
  featureProducts:[],
  isSingleLoading: false,
  singleProduct:{},
}

const AppProvider =({children})=>{

    const [state,dispatch] = useReducer(reducer, initialState);

    const getProducts= async(url)=>{
      dispatch({type:"API_LOADING"});
      try{
        const res = await axios.get(url);
      const Products = await res.data.data;
      dispatch({type:"API_CALL",payload:Products});
      }
      catch(error){
        dispatch({type:"API_ERROR"})
      }
    }

    const getSingleProduct = async(url)=>{
      dispatch({type:"SET_LOADING"});
      try{
        const res = await axios.get(url);
        const singleProduct = await res.data;
      dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});
      }catch(error){
        dispatch({type:"SET_ERROR"})
      }
    }

    useEffect(()=>{
     getProducts(API);
    },[]);
    return( 
    <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>)
};

const useProductContext =()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useProductContext};