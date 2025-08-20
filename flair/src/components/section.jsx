import React from "react";
import leftImg from "../assets/endimg.webp";   
import rightImg from "../assets/endimg2.avif"; 

const Section = () => {
  return (
    <div className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="bg-[#0a0a0a] rounded-2xl p-8 shadow-lg relative group">
          <h2 className="text-5xl font-bold mb-4 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,255,128,0.8)]">
            AI Ad Generation
          </h2>
          <p className="text-xl text-gray-300 mb-6 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,255,128,0.7)]">
            Generate high-quality ads for your products with brand consistency 
            alongside a library of templates.
          </p>
          <img
            src={leftImg}
            alt="AI Ad Generation"
            className="w-full rounded-xl shadow-xl"
          />
        </div>

        {/* Right Side */}
        <div className="bg-[#0a0a0a] rounded-2xl p-8 shadow-lg relative group">
          <h2 className="text-5xl font-bold mb-4 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,255,128,0.8)]">
            AI Human Models
          </h2>
          <p className="text-xl text-gray-300 mb-6 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,255,128,0.7)]">
            Build custom AI human models based on features and scale them across 
            all your brand assets. Choose from a range of features including hair 
            color, body type, and more.
          </p>
          <img
            src={rightImg}
            alt="AI Human Models"
            className="w-full rounded-xl shadow-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default Section;

