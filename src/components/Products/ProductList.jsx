import { useFiltercontext } from "../../context/FilterContex";
import { ProductCard } from "./ProductCard";

const ProductList=()=>{
  const{filter_products} = useFiltercontext();
    return(
      <div className="w-full flex flex-wrap">
        {
          filter_products.map((curEl,id)=>{
            return <ProductCard key={curEl.id}{...curEl}/>
          })
        }
      </div>
    )
}
export default ProductList;