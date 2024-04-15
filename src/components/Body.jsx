import Carousel from "./home/Carousel";
import CardCarousel from "./home/CardCarousel";
import SalesSection from "./home/SaleSection";
import FeatureProducts from "./Products/FeatureProducts";
import { useFiltercontext } from "../context/FilterContex";
import { ProductCard } from "./Products/ProductCard";
import HeroSection from "./home/HeroSection";
import Steps from "./home/Steps";

const Body = () =>{
    
  const {
    filters:{text},
    updateFilterValue,} = useFiltercontext() ;
    const{filter_products} = useFiltercontext();
    if(text){
    return(
      <div className="flex flex-wrap">
        {
          filter_products.map((curEl,id)=>{
            return <ProductCard key={curEl.id}{...curEl}/>
          })
        }
      </div>
    )
    }


    return(
       <div className="bg-white md:h-fit md:w-auto w-[50rem] ">
        <HeroSection/>
        <Steps/>
        <CardCarousel/>
        <SalesSection/>
        <FeatureProducts/>
        

       </div>
    )
}

export default Body;