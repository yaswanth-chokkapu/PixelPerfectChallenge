// src/components/Template.jsx
import React from "react";
import newvideo from "../assets/newvideo.mp4";

const Template = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Single Video (unchanged) */}
        <div className="flex justify-center">
          <video
            src={newvideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-lg w-full max-w-[720px] h-auto"
          />
        </div>

        {/* Right: Heading + paragraph + green link */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold leading-snug">
            Mix &amp; match <br className="hidden md:block" />
            product with <br className="hidden md:block" />
            templates
          </h2>

          <p className="text-gray-400 mt-6 text-xl md:text-2xl">
            Test design concepts that convert customers with one click.
            Build reusable templates at scale.
          </p>

          <a
            href="#"
            className="inline-block mt-8 text-2xl font-semibold text-green-400 transition-all duration-300 hover:text-green-300 hover:drop-shadow-[0_0_10px_#22c55e] focus:outline-none focus:drop-shadow-[0_0_10px_#22c55e]"
          >
            Start with templates →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Template;





