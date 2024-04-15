
// import {FilterSection} from "./FilterSection";
import ProductList from "./ProductList";
import { useFiltercontext } from "../../context/FilterContex";
const AllProducts =()=>{
    const {filter_products,sorting} =  useFiltercontext();
    console.log(filter_products);
    return(
        
        <div className="flex flex-row m-16 w-full">
            <div className="productsSection w-full mx-10 ">
                <div className="sortDropdown">
                  <form action="#">
                    <label htmlFor="sort"></label>
                    <select onClick={sorting} name="sort" id="sort" className="bg-gray-200 p-1 mx-5 rounded border-none active:bg-slate-50 focus:border-none">
                        <option value="Lowest">Price(Lowest)</option>
                        <option value="Highest">Price(Highest)</option>
                        <option value="A-Z">Price(A-Z)</option>
                        <option value="Z-A">Price(Z-A)</option>
                    </select>
                  </form>
                </div>
                <ProductList/>
            </div>

        </div>
    )
}
export default AllProducts;