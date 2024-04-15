import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import { useState } from 'react';

const Carousel=()=>{
    const slides = [
        {
            url:"https://static.vecteezy.com/system/resources/previews/011/188/829/non_2x/9-9-shopping-day-banner-with-orange-podium-scene-on-red-background-flash-sale-online-shopping-banner-template-design-for-social-media-and-website-vector.jpg"
        },{
            url:"https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },{
            url:"https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ]

    const [currentIndex, setCurrentIndex]= useState(0);
    const PrevSlide=()=>{
      const isFirstSlide = currentIndex ===0;
      const newIndex =  isFirstSlide ? slides.length-1 : currentIndex-1;
      setCurrentIndex(newIndex);
    }
    const NextSlide=()=>{
      const isLastSlide = currentIndex === slides.length-1;
      const newIndex = isLastSlide ? 0 : currentIndex+1;
      setCurrentIndex(newIndex);
    }

    return(
        <div className="md:max-w-[99vw] md:h-[60vh] md:w-full m-auto py-10 px-2 mx-2 relative group w-[49rem] h-[25rem]">
            <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-300"></div>
            <div className='hidden group-hover:block absolute top-[40%] translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
                <BsChevronCompactLeft size={30} onClick={PrevSlide}/>
            </div>
            <div className='hidden group-hover:block absolute top-[40%] translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight size={30} onClick={NextSlide}/>
            </div>
        </div>
    )
}
export default Carousel;