import React from 'react';


const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-[url('/hero2.png')]">
      <div className="flex flex-col text-center h-[803px]">
        
        {/* Border and Year Section */}
        <div className="flex flex-row text-center justify-center items-center mt-9 mb-4">
          <div className="border border-[#EBAE15] w-28 mr-6" />
          <h5 className="text-[34px] text-white font-semibold">1983</h5>
          <div className="border border-[#EBAE15] w-28 ml-6" />
        </div>

        {/* Main Title */}
        <h1 className="text-[54px] text-white">
          WE WILL BE <span className="text-[#EBAE15]">HAPPY</span> TO <br />
          TAKE CARE OF YOUR <br />
          WORK
        </h1>

        {/* Description */}
        <p className="text-white text-sm mt-10">
          Lorem ipsum dolor sit amet consectetur. <br />
          Tortor justo consequat pharetra justquis <br />
          Tortor justo consequat pharetra justquis
        </p>

        {/* Button */}
        <div className="mt-28">
          <button className="border border-[#EBAE15] px-1 py-2 text-[#EBAE15] font-semibold shadow shadow-custom-yellow hover:text-white hover:bg-custom-yellow text-lg">
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
