import React from 'react';

const Messages = () => {
  return (
    <div className="h-[880px] flex flex-row bg-slate-100">
      {/* Left Side - Contact Form */}
      <div className="w-[60%] bg-white h-[880px] p-16">
        <h2 className="text-custom-yellow font-semibold text-lg">DROP MESSAGE</h2>
        <h1 className="text-4xl font-bold mt-4">Request A Quote</h1>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div className="flex space-x-6">
            <div className="w-1/2">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="fullName">
                Your Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your Full Name"
                className="w-full border border-gray-300 p-4 outline-none text-lg rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 p-4 outline-none text-lg rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="subject">
              Select Subject
            </label>
            <select
              id="subject"
              className="w-full border border-gray-300 p-4 text-lg outline-none rounded-md"
            >
              <option>Select Subject</option>
              <option>Construction</option>
              <option>Design</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full border border-gray-300 p-4 text-lg  outline-none rounded-md h-40"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-custom-yellow text-white outline-none px-3 py-4 rounded-md font-semibold text-lg hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side - FAQ Section */}
      <div className="w-[40%] bg-[url('/frame.png')] bg-cover h-[880px] p-16">
        <h2 className="text-custom-yellow font-semibold text-lg">Frequently Asked Question</h2>
        <h1 className="text-3xl font-bold mt-4">
          You Want To Ask Something From Us?
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          A small river named Duden flows by their place and supplies it with the
          necessary regelialia. It is a paradisematic country, in which roasted parts
          of sentences fly into your mouth.
        </p>

        {/* FAQ Items */}
        <div className="mt-8 space-y-4">
          <details className="bg-white p-6 rounded-md shadow-md">
            <summary className="font-semibold text-lg text-gray-800 cursor-pointer">
              What are the problems in Construction?
            </summary>
            <p className="mt-3 text-gray-600">
              Construction can face various issues including delays, budget overruns,
              and safety concerns.
            </p>
          </details>
          <details className="bg-white p-6 rounded-md shadow-md">
            <summary className="font-semibold text-lg text-gray-800 cursor-pointer">
              What is the best practice in Construction?
            </summary>
            <p className="mt-3 text-gray-600">
              Best practices include effective project management, safety compliance,
              and using quality materials.
            </p>
          </details>
          <details className="bg-white p-6 rounded-md shadow-md">
            <summary className="font-semibold text-lg text-gray-800 cursor-pointer">
              What is the best practice in Construction?
            </summary>
            <p className="mt-3 text-gray-600">
              Construction best practices focus on quality control, budget management, and regulatory compliance.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Messages;
