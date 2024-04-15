
import axios from "axios";
import { useFiltercontext } from "../../context/FilterContex";
import CardHome from "./CardHome";
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'
import { useEffect, useState } from "react";

const CardCarousel =(props)=>{
    const [productArray, setProductArray] = useState([]);
    
    const userData = JSON.parse(localStorage.getItem('login'));
    console.log(userData);
    const RecommendedProducts = async()=>{
        const res = await axios.get(`http://127.0.0.1:8000/predict/data/${userData.id}`);
        const proDucts = await res.data;
        setProductArray(proDucts.data);
    }
    console.log(productArray);
    useEffect(()=>{
        RecommendedProducts();
    },[])
    const ScrollLeft =()=>{
            document.getElementById("btn").scrollLeft -= 800;
    }
    const ScrollRight =()=>{
            document.getElementById("btn").scrollLeft += 800;
    }
    
    return(
        <div className="Carousel md:w-full relative md:flex md:flex-row justify-between align-middle h-full w-[50rem]">
            <div className="cardsCarouselTitle md:w-[30vw] h-auto md:inline-flex flex-col justify-center align-middle p-3  scrollbar-hide">
            <h1 className="text-5xl m-3 font-normal text-center ">Recommended Products</h1>
            <button className="text-base font-normal h-10 md:w-1/4  w-20 absolute right-10 top-9 md:relative md:left-[38%] bg-blue-600 text-white rounded-lg transition hover:scale-90 duration-400">View All</button>
            </div>
        
           <div id="btn" className="allCards  p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide transition duration-1000 md:w-4/5 ">
           <div className="arrows  scrollbar-hide">
                <button onClick={ScrollLeft}  className="rounded-full bg-black/20 text-white absolute top-[40%] translate-x-0 -translate-y-[-50%]"><FiChevronLeft size={40}/></button>
                <button onClick={ScrollRight}  className="rounded-full bg-black/20 text-white absolute top-[40%] translate-x-0 -translate-y-[-50%] right-10 "><FiChevronRight size={40}/></button>
            </div>

            {
                productArray.map((curEl)=> {
                    return <CardHome key={curEl.id}{...curEl} className="scrollbar-hide"/>
                })

            }
          
           </div>
        </div>
    )
}

export  default CardCarousel;