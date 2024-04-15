const FilterReducer=(state,action)=>{
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload],

            };

        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(sort_value);
            return{
                ...state,
                sorting_value:action.payload,
            }
        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortProduct= [...action.payload];
            
            const {filter_products,sorting_value} = state;
            let tempSortProduct= [...filter_products];


            const sortingProducts = (a,b)=>{
                if(sorting_value === "Lowest"){
                    return a.price - b.price
                }

                if(sorting_value === "Highest"){ 
                        return b.price - a.price 
                }

                if(sorting_value === "A-Z"){
                    
                     return  a.name.localeCompare(b.name)
                }

                if(sorting_value === "Z-A"){
                
                   b.name.localeCompare(a.name)
                }    
               
            };
            newSortData = tempSortProduct.sort(sortingProducts);
            

            
            return{
                ...state,
                filter_products:newSortData,
            }

        case "UPDATE_FILTER_VALUE":
            const { name , value}= action.payload;

            return{
               ...state,
               filters: {
                 ...state.filters,
                 [name] : value,
               }, 
        };

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products]; 

            const { text } = state.filters;

            if(text){
                tempFilterProduct = tempFilterProduct.filter((curEL)=>{
                   return curEL.name.toLowerCase().startsWith(text);
                });
            }
            
            return{
                ...state,
                filter_products:tempFilterProduct,
            }
    
        default:
            return state;
    }
}

export default FilterReducer