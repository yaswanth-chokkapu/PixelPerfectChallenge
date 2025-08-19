import React, { useRef, useState } from "react";

import model1 from "../assets/model1.jpg";
import model2 from "../assets/model2.jpg";
import model3 from "../assets/model3.jpg";
import marketing1 from "../assets/marketing1.png";
import marketing2 from "../assets/marketing2.png";
import marketing3 from "../assets/marketing3.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("models");

  const modelRef = useRef(null);
  const videoRef = useRef(null);
  const marketingRef = useRef(null);
  const photoRef = useRef(null);

  const scrollLeft = (ref) =>
    ref.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = (ref) =>
    ref.current?.scrollBy({ left: 300, behavior: "smooth" });

  const getRef = () => {
    switch (activeTab) {
      case "models":
        return modelRef;
      case "videos":
        return videoRef;
      case "marketing":
        return marketingRef;
      case "photography":
        return photoRef;
      default:
        return null;
    }
  };

  const tabs = [
    { key: "models", label: "On Model Photography" },
    { key: "videos", label: "Product Videos" },
    { key: "marketing", label: "Marketing & Ads" },
    { key: "photography", label: "Product Photography" },
  ];

  // Responsive shared classes
  const sharedImgClasses =
    "rounded-xl object-cover flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64";

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-center">
        Generate on brand content
        <br /> for all your business needs.
      </h1>

      {/* Tabs centered */}
      <div className="mt-8 w-full max-w-6xl flex justify-center">
        <div className="flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-medium ${
                activeTab === tab.key
                  ? "bg-gray-700 border border-lime-400 text-lime-400"
                  : "border border-gray-600 hover:border-lime-400 hover:text-lime-400"
              } rounded-full transition`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll arrows */}
      <div className="w-full max-w-6xl flex justify-end mt-4 px-2">
        <div className="flex gap-3">
          <button
            onClick={() => scrollLeft(getRef())}
            className="bg-gray-700 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => scrollRight(getRef())}
            className="bg-gray-700 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 w-full max-w-6xl relative">
        {activeTab === "models" && (
          <div
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide"
            ref={modelRef}
          >
            {[model1, model2, model3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Model ${i + 1}`}
                className={sharedImgClasses}
              />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide"
            ref={videoRef}
          >
            {[video1, video2, video3].map((vid, i) => (
              <video
                key={i}
                src={vid}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover"
              />
            ))}
          </div>
        )}

        {activeTab === "marketing" && (
          <div
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide"
            ref={marketingRef}
          >
            {[marketing1, marketing2, marketing3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Marketing ${i + 1}`}
                className={sharedImgClasses}
              />
            ))}
          </div>
        )}

        {activeTab === "photography" && (
          <div
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide"
            ref={photoRef}
          >
            {[product1, product2, product3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Product ${i + 1}`}
                className={sharedImgClasses}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}









