import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-row h-[850px] w-full bg-slate-100 justify-center text-center">
      <div className="mt-9">
        {/* Using next/image for optimization */}
        <Image src="/Group4.png" alt="About Image" width={540} height={540} />
      </div>
      <div className="flex flex-col mt-10">
        <div className="text-start ml-7">
          <h4 className="text-custom-yellow text-2xl">Welcome To BuildDream</h4>
          <h1 className="text-5xl font-semibold my-5 Gilroy-Medium">
            Quality and <br />
            Affordable <br />
            Constructor
          </h1>
          <p className="Gilroy-Medium text-[#00000080] text-lg ">
            Far far away, behind the word mountains, far from the <br />
            countries Vokalia and Consonantia, there live blind texts. <br />
            Separated they live in Bookmarksgrove right at the coast <br />
            Ocean Language.
          </p>
          <div className="flex flex-row mt-5">
            <div className="relative w-[200px] h-[170px] bg-[#595959] group hover:scale-105 transform transition-all duration-300">
              <div className="flex flex-row text-center">
                <div className="flex flex-col mt-5 ml-5 Gilroy-Medium">
                  {/* Using next/image for optimization */}
                  <Image src="/Group6.png" alt="Icon 1" width={36} height={36} className="mb-4" />
                  <Image src="/Group5.png" alt="Icon 2" width={16} height={64} className="ml-2" />
                </div>
                <div className="flex flex-col w-[70%] text-start ml-5">
                  <h5 className="my-5 text-white font-semibold">Construction</h5>
                  <h6 className="text-white font-extralight">
                    Far far away <br />
                    behind the word mountains
                  </h6>
                </div>
              </div>
              {/* Light yellow overlay */}
              <div className="absolute inset-0 bg-[#595959] hover:bg-custom-yellow opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            <div className="relative w-[200px] h-[170px] bg-[#595959] ml-8 group hover:scale-105 transform transition-all duration-300">
              <div className="flex flex-row text-center Gilroy-Medium">
                <div className="flex flex-col mt-5 ml-5">
                  {/* Using next/image for optimization */}
                  <Image src="/Group9.png" alt="Icon 3" width={36} height={36} className="mb-4" />
                  <Image src="/Group5.png" alt="Icon 4" width={16} height={64} className="ml-2" />
                </div>
                <div className="flex flex-col w-[70%] text-start ml-5">
                  <h5 className="my-5 text-white font-semibold">Construction</h5>
                  <h6 className="text-white font-extralight">
                    Far far away <br />
                    behind the word mountains
                  </h6>
                </div>
              </div>
              {/* Light yellow overlay */}
              <div className="absolute inset-0 bg-[#595959] opacity-20 group-hover:opacity-40 hover:bg-custom-yellow transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="flex flex-row mt-5">
            <div className="relative w-[200px] h-[170px] bg-[#595959] group hover:scale-105 transform transition-all duration-300">
              <div className="flex flex-row text-center">
                <div className="flex flex-col mt-5 ml-5 Gilroy-Medium">
                  {/* Using next/image for optimization */}
                  <Image src="/Group8.png" alt="Icon 5" width={36} height={36} className="mb-4" />
                  <Image src="/Group5.png" alt="Icon 6" width={16} height={64} className="ml-2" />
                </div>
                <div className="flex flex-col w-[70%] text-start ml-5">
                  <h5 className="my-5 text-white font-semibold">Construction</h5>
                  <h6 className="text-white font-extralight">
                    Far far away <br />
                    behind the word mountains
                  </h6>
                </div>
              </div>
              {/* Light yellow overlay */}
              <div className="absolute inset-0 bg-[#595959] opacity-20 group-hover:opacity-40 transition-opacity hover:bg-custom-yellow duration-300"></div>
            </div>

            <div className="relative w-[200px] h-[170px] bg-[#595959] ml-8 group hover:scale-105 transform transition-all duration-300">
              <div className="flex flex-row text-center">
                <div className="flex flex-col mt-5 ml-5">
                  {/* Using next/image for optimization */}
                  <Image src="/Group7.png" alt="Icon 7" width={36} height={36} className="mb-4" />
                  <Image src="/Group5.png" alt="Icon 8" width={16} height={64} className="ml-2" />
                </div>
                <div className="flex flex-col w-[70%] text-start ml-5">
                  <h5 className="my-5 text-white font-semibold">Construction</h5>
                  <h6 className="text-white font-extralight">
                    Far far away <br />
                    behind the word mountains
                  </h6>
                </div>
              </div>
              {/* Light yellow overlay */}
              <div className="absolute inset-0 bg-[#595959] opacity-20 group-hover:opacity-40 hover:bg-custom-yellow transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
