import React from 'react';


const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-[url('/hero2.png')]">
      <div className="flex flex-col text-center h-[803px]">
        
        {/* Border and Year Section */}
        <div className="flex flex-row text-center justify-center items-center mt-9 mb-4">
          <div className="border border-[#EBAE15] w-28 mr-6" />
          <h5 className="text-[34px] text-white font-semibold">1982</h5>
          <div className="border border-[#EBAE15] w-28 ml-6" />
        </div>

        {/* Main Title */}
        <h1 className="text-[54px] text-white Gilroy-Bold font-bold">
          WE WILL BE <span className="text-[#EBAE15]">HAPPY</span> TO <br />
          TAKE CARE OF YOUR <br />
          WORK
        </h1>

        {/* Description */}
        <p className="text-white text-lg mt-10 Gilroy-Medium">
          Lorem ipsum dolor sit amet consectetur. <br />
          Tortor justo consequat pharetra justquis <br />
          Tortor justo consequat pharetra justquis
        </p>

        {/* Button */}
        <div className="mt-28  Gilroy-Bold">
          <button   className="border-[2px] border-[#EBAE15] px-6 py-2 rounded-md text-[#EBAE15] font-semibold shadow-custom-yellow hover:text-white hover:bg-[#EBAE15] text-lg transition-all duration-300">
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
