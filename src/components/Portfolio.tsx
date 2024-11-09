import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const Port = () => {
  return (
    <div className="flex flex-col h-[900px] w-full justify-center items-center text-center bg-slate-100">
      <div>
        <h1 className="text-lg text-custom-yellow font-bold">
          Portfolio<br />
          <span className="text-5xl text-black font-semibold">Projects</span>
        </h1>
      </div>

      <div className="flex flex-row mt-16">
        {/* First Image */}
        <div className="relative group">
          <Image src="/2.png" alt="High Tower Works 1" width={440} height={300} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <h3 className="text-white text-xl font-bold mt-48 mr-9 text-start">
              BUILDINGS <br /><span className='text-3xl'>HIGH TOWER WORKS</span>
            </h3>
          </div>
          {/* Search Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg"><FaSearch  /></span>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative group">
          <Image src="/1.png" alt="High Tower Works 2" width={440} height={300} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <h3 className="text-white text-xl font-bold mt-48 mr-9 text-start">
              BUILDINGS <br /><span className='text-3xl'>HIGH TOWER WORKS</span>
            </h3>
          </div>
          {/* Search Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg"><FaSearch  /></span>
          </div>
        </div>

        {/* Third Image */}
        <div className="relative group">
          <Image src="/3.png" alt="High Tower Works 3" width={390} height={300} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <h3 className="text-white text-xl font-bold mt-48 mr-9 text-start">
              BUILDINGS <br /><span className='text-3xl'>HIGH TOWER WORKS</span>
            </h3>
          </div>
          {/* Search Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg"><FaSearch  /></span>
          </div>
        </div>
      </div>

      <div className="flex flex-row ">
        {/* Fourth Image */}
        <div className="relative group">
          <Image src="/5.png" alt="High Tower Works 4" width={440} height={300} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <h3 className="text-white text-xl font-bold mt-48 mr-9 text-start">
              BUILDINGS <br /><span className='text-3xl'>HIGH TOWER WORKS</span>
            </h3>
          </div>
          {/* Search Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg"><FaSearch  /></span>
          </div>
        </div>

        {/* Fifth Image */}
        <div className="relative group">
          <Image src="/6.png" alt="High Tower Works 5" width={440} height={300} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <h3 className="text-white text-xl font-bold mt-48 mr-9 text-start">
              BUILDINGS <br /><span className='text-3xl'>HIGH TOWER WORKS</span>
            </h3>
          </div>
          {/* Search Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg"><FaSearch  /></span>
          </div>
        </div>

        {/* Sixth Image */}
        <div className="relative group">
          <Image src="/7.png" alt="High Tower Works 6" width={390} height={300} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <h3 className="text-white text-xl font-bold mt-48 mr-9 text-start">
              BUILDINGS <br /><span className='text-3xl'>HIGH TOWER WORKS</span>
            </h3>
          </div>
          {/* Search Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg"><FaSearch  /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Port;
