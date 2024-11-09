import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#373636] h-[700px]">
      <div className="bg-[#585858] h-[600px] flex flex-row justify-center items-center">
        <div className="mb-[250px] mr-20">
          <h1 className="text-3xl text-white font-bold">BUILD DREAM</h1>
          <p className="text-[#D9D9D9E5] mt-6">
            A small river named Duden flows by <br />
            their place and supplies it with the <br />
            necessary regelialia.{" "}
          </p>
        </div>
        <div className="flex flex-col mx-14">
          <h1 className="text-3xl text-white font-bold mb-6">SERVICES</h1>
          <a href="#" className="text-[#D9D9D9E5] my-1">Road Map</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">House Construction</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">Building Map</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">House Map</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">Architecture Services</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">Road Map</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">House Construction</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">Building Map</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">House Map</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">Architecture Services</a>
        </div>
        <div className="flex flex-col mb-[150px] mx-32">
          <h1 className="text-3xl text-white font-bold mb-6">Quick Links</h1>
          <a href="#" className="text-[#D9D9D9E5] my-1">Project in Lahore</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">Project in Bhawalpur</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">Project in Islamabad</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">Project in Sahiwal</a>
          <a href="#" className="text-[#D9D9D9E5] my-1">Project in Karachi</a>
        </div>
        <div className="mb-[270px]">
          <h1 className="text-3xl text-white font-bold mb-6">Follow us;</h1>
          <div className="flex space-x-1">
            <Image src="/Group1.png" alt="Twitter" width={40} height={32} />
            <Image src="/Group2.png" alt="Facebook" width={40} height={32} />
            <Image src="/Group3.png" alt="Instagram" width={40} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
