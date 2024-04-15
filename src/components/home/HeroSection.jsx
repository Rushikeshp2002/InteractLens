const HeroSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg  ">
          <div className="max-w-xl mb-6 bg-white p-7 bg-opacity-30 rounded-2xl z-20">
            <div className="max-w-lg mb-6 font-medium  text-xl tracking-tight text-gray-900 sm:text-6xl sm:leading-none">
              Exquisite Finds Just
              <div className="hidden " /> For{" "}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-400" />
                <span className="relative inline-block text-violet-600 ">
                  You
                </span>
              </span>
            </div>
            <p className="text-black font-medium -mt-2 p-1  bg-yellow-300 w-fit -skew-x-12 rounded-md">
              Smart Picks For Savvy Shoppers
            </p>
            <p className="text-base text-gray-700 md:text-lg">
             Don't let high ratings lead you astray. Break free from the norm and switch to Flippy for a shopping experience as unique as you are.
            </p>

            <div className="mb-2 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2 mt-5">
              <div className="duration-300 transform bg-white border-l-4 border-indigo-400 hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                  Seeking Shopping Liberation? Turn to Flippy's Wisdom!
                  </h6>
                  <p className="text-sm text-gray-900">
                  Our personalized recommendations tailor every pick to your taste, ensuring each click sparks joy. Say goodbye to cookie-cutter choices and hello to Flippy - your ticket to shopping nirvana!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          {/* ----------- */}
          <div className="z-10">
            <div className="absolute top-40 left-28 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-80 left-96 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute  left-20 w-96 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          {/* ----------- */}
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-64 w-28 sm:w-48 xl:w-72"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-52 sm:w-32 xl:w-52"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-96 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
