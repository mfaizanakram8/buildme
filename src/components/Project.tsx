import Image from 'next/image'; // Import Image component
import React from "react";


const Project = () => {
  return (
    <div className="h-[300px] w-full bg-slate-100">
      {/* second dev */}
      <div className="h-[260px] bg-[#37393A] flex flex-row justify-center items-center">
        <div className="flex flex-row">
          <div>
            <Image src="/Vector1.png" alt="Vector1" width={64} height={64} />
          </div>
          <div className="ml-5">
            <h1 className="text-3xl text-custom-yellow mb-2 font-bold">500</h1>
            <p className="text-white text-xl font-semibold">
              COMPLETED PROJECTS
            </p>
          </div>
        </div>

        {/* second card */}
        <div className="flex flex-row mx-20">
          <div>
            <Image src="/Vector1.png" alt="Vector1" width={64} height={64} />
          </div>
          <div className="ml-5">
            <h1 className="text-3xl text-custom-yellow mb-2 font-bold">50</h1>
            <p className="text-white text-xl font-semibold">
              HAPPY CLIENT
            </p>
          </div>
        </div>

        {/* third card */}
        <div className="flex flex-row">
          <div>
            <Image src="/Vector1.png" alt="Vector1" width={64} height={64} />
          </div>
          <div className="ml-5">
            <h1 className="text-3xl text-custom-yellow mb-2 font-bold">100</h1>
            <p className="text-white text-xl font-semibold">
              ENGINEERS AND STAFF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
