
import React from "react";
import threeDImage from "../assets/3dimage.avif"; 

const Icons = () => {
  return (
    <section className="relative bg-black text-white px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
      
      {/* Left side heading + text */}
      <div className="flex-1 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-6xl font-light leading-tight">
          Stage scenes digitally with <br />
          drag & drop props. <br />
          Bring it to life with <span className="text-green-400">AI</span>.
        </h2>
      </div>

      {/* Right side 3D image */}
      <div className="flex-1 flex justify-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={threeDImage}
            alt="3D Preview"
            className="w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Icons;
