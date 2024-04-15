import { useEffect, useState } from "react";
import {motion} from 'framer-motion';

const Steps = () => {
    const[mousePosition,setMousePosition]= useState({x:0,y:0});
  const [cursorVariant,setCursorVariant]= useState("default");

  useEffect(()=>{
    const mouseMove=()=>{
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      })

    }
    window.addEventListener('mousemove',mouseMove)
    return ()=>{
      window.removeEventListener('mousemove',mouseMove)
    }
  },[]);
  const variants = {
    default:{
      x: mousePosition.x-16,
      y: mousePosition.y-16 
    },
    text:{
        height: 150,
        width: 150,
        x: mousePosition.x-75,
        y: mousePosition.y-75,
        backgroundColor: "white",
        mixBlendMode: "difference",
    },
    
    
}

const textEnter =()=> setCursorVariant("text")
const textLeave =()=> setCursorVariant("default")
const textEnterX =()=> setCursorVariant("textX")
const textLeaveX =()=> setCursorVariant("default")





  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" >
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-400">
            Analyze Click
          </p>
        </div>
        <h2 onMouseEnter={textEnter} onMouseLeave={textLeave} className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Let's</span>
          </span>{" "}
          launch a rocket into outer space
        </h2>
        <p className="text-base text-gray-700 md:text-lg" onMouseEnter={textEnter} onMouseLeave={textLeave} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut ipsa animi enim culpa accusamus corrupti eaque laboriosam maxime ipsam iste.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <div  className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-purple-100 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-400">
              1
            </p>
            <p className="text-lg font-bold leading-5" >Browse</p>
          </div>
          <p className="text-sm text-gray-900">
            Bro ipsum dolor sit amet gaper backside single track, manny Bike
            epic clipless.
          </p>
        </div>
        <div  className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-purple-200 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-400">
              2
            </p>
            <p className="text-lg font-bold leading-5">Click</p>
          </div>
          <p className="text-sm text-gray-900">
            Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
            flail 180 berm.
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-purple-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-400">
              3
            </p>
            <p className="text-lg font-bold leading-5">Find your perfect match</p>
          </div>
          <p className="text-sm text-gray-900">
          Labels in my wardrobe, memories in my purchases. Fashion journey always evolves
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-purple-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>
      <motion.div className="cursor z-50" variants={variants} animate={cursorVariant} style={{backgroundColor: "black",
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        position: "fixed",
        top: "0",
        left: "0",
        pointerEvents:"none",
        }}/>
    </div>
  );
};

export default Steps;
