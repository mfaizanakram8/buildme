import Image from 'next/image'; // Import the Image component
import React from 'react';


const Services = () => {
  return (
    <div className='flex flex-col h-[1000px] w-full bg-slate-100 justify-center text-center'>
      <div>
        <h1 className='text-lg text-custom-yellow font-bold'>
          What We Do <br />
          <span className='text-5xl text-black font-semibold'>Services</span>
        </h1>
      </div>
      
      <div className="flex flex-row">
        <div className="mt-9 ml-28">
          <Image src="/Group12.png" alt="Group Image" width={574} height={574} className="w-[574px]" />
        </div>
        <div className='flex flex-col'>
          {/* First box */}
          <div className='mt-12 ml-9'>
            <div className='bg-[#37393A] h-[250px] w-[450px] flex flex-col justify-center items-center'>
              <div className='flex flex-row mr-[74px]'>
                <Image src="/Vector.png" alt="Vector Icon" width={64} height={64} className='w-16' />
                <h1 className='text-2xl text-white font-semibold mt-4 ml-5'>Construction Services</h1>
              </div>
              <div className='text-start ml-20 text-white'>
                <p>
                  Far far away, behind the word mountains, far <br />
                  from the countries Vokalia and Consonantia,<br />
                  there live blind texts.
                </p>
                <button className='bg-white px-3 py-2 text-custom-yellow rounded-md font-semibold text-[14px] mt-5 hover:bg-custom-yellow hover:text-white'>
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          
          {/* Second box */}
          <div className='mt-3 ml-9'>
            <div className='bg-[#EBAE15] h-[250px] w-[450px] flex flex-col justify-center items-center'>
              <div className='flex flex-row mr-[74px]'>
                <Image src="/Vector2.png" alt="Vector2 Icon" width={64} height={64} className='w-16' />
                <h1 className='text-2xl text-white font-semibold mt-4 ml-5'>Infrastrcture Services</h1>
              </div>
              <div className='text-start ml-20 text-white'>
                <p>
                  Far far away, behind the word mountains, far <br />
                  from the countries Vokalia and Consonantia,<br />
                  there live blind texts.
                </p>
                <button className='bg-white px-3 py-2 text-custom-yellow rounded-md font-semibold text-[14px] mt-5 hover:bg-gray-500 hover:text-white'>
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          
          {/* Third box */}
          <div className='mt-4 ml-9'>
            <div className='bg-[#37393A] h-[250px] w-[450px] flex flex-col justify-center items-center'>
              <div className='flex flex-row mr-[74px]'>
                <Image src="/Vector3.png" alt="Vector3 Icon" width={64} height={64} className='w-16' />
                <h1 className='text-2xl text-white font-semibold mt-4 ml-5'>Archietecture Services</h1>
              </div>
              <div className='text-start ml-20 text-white'>
                <p>
                  Far far away, behind the word mountains, far <br />
                  from the countries Vokalia and Consonantia,<br />
                  there live blind texts.
                </p>
                <button className='bg-white px-3 py-2 text-custom-yellow rounded-md font-semibold text-[14px] mt-5 hover:bg-custom-yellow hover:text-white'>
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
