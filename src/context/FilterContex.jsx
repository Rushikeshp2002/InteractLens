import { createContext, useContext, useEffect, useReducer } from "react";
import {useProductContext} from "../context/ProductContext";
import reducer from "../components/Reducer/FilterReducer";


const FilterContext = createContext();


const initialState={
    filter_products: [],
    all_products:[],
    sorting_value: "Lowest",
    filters: {
        text: "",

    },

}

export const FilterContextProvider =({children})=>{
    const { Products } = useProductContext();

    const [state,dispatch] = useReducer(reducer,initialState); 

    const sorting=(event)=>{
        let userValue = event.target.value;
       dispatch({type:"GET_SORT_VALUE",payload:userValue});
    };

    const updateFilterValue=(event)=>{
       let name = event.target.name;
       let value = event.target.value;
       return dispatch({type:"UPDATE_FILTER_VALUE", payload: {name, value}});
    }

    useEffect(()=>{

        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"})
    },[Products,state.sorting_value,state.filters])

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:Products});
    },[Products]);
   return(
    <FilterContext.Provider value={{...state,sorting,updateFilterValue}}>
        {children}
        
    </FilterContext.Provider>
   );
};

export const useFiltercontext =()=>{
    return useContext(FilterContext);
}