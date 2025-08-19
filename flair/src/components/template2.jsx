import React from "react";
import newmodel from "../assets/newmodel.avif";
import newmodel2 from "../assets/newmodel2.avif";

const Template2 = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-10">
     + <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
        
        {/* Left side - text content */}
        <div className="space-y-6">
          <p className="text-green-500 font-semibold uppercase tracking-widest text-sm">
            New Feature
          </p>
          <h1 className="text-4xl font-bold">Fashion photoshoots</h1>
          <p className="text-gray-400 leading-relaxed">
            Fit your clothing and jewelry onto AI generated models with patterns
            and logos preserved. Create high-quality on-model imagery at scale.
          </p>
          <button
            className="bg-green-500 text-black px-6 py-3 rounded-md font-semibold 
                       hover:shadow-[0_0_20px_#22c55e] transition-all duration-300"
          >
            Try AI Fashion for Free
          </button>
        </div>

        {/* Right side - images */}
        <div className="relative flex justify-center">
          {/* Main model image */}
          <img
            src={newmodel2}
            alt="Model"
            className="rounded-lg shadow-lg max-h-[500px] object-cover"
          />
          {/* Inset clothing image */}
          <img
  src={newmodel}
  alt="Clothing"
  className="absolute top-10 left-[-60px] w-40 rounded-lg shadow-xl 
             sm:w-28 sm:top-5 sm:left-[-30px]" 
/>

        </div>
      </div>
    </div>
  );
};

export default Template2;
