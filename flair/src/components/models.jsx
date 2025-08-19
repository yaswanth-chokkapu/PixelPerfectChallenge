import React, { useRef, useState } from "react";

// Import assets from src/assets
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
import video3 from "../assets/video3.mp4"; // new video

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("models");

  const modelRef = useRef(null);
  const videoRef = useRef(null);
  const marketingRef = useRef(null);
  const photoRef = useRef(null);

  const scrollLeft = (ref) => ref.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = (ref) => ref.current?.scrollBy({ left: 300, behavior: "smooth" });

  const getRef = () => {
    switch (activeTab) {
      case "models": return modelRef;
      case "videos": return videoRef;
      case "marketing": return marketingRef;
      case "photography": return photoRef;
      default: return null;
    }
  };

  const tabs = [
    { key: "models", label: "On Model Photography" },
    { key: "videos", label: "Product Videos" },
    { key: "marketing", label: "Marketing & Ads" },
    { key: "photography", label: "Product Photography" },
  ];

  const sharedImgClasses = "rounded-xl w-64 h-64 object-cover flex-shrink-0";

  return (
    <div className="bg-black text-white py-16 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-semibold text-center">
        Generate on brand content
        <br /> for all your business needs.
      </h1>

      {/* Tabs centered */}
      <div className="mt-8 w-full max-w-5xl flex justify-center">
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 font-medium ${
                activeTab === tab.key
                  ? "bg-gray-700 border-lime-400 text-lime-400"
                  : "border border-gray-600 hover:border-lime-400 hover:text-lime-400"
              } rounded-full`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll arrows moved to bottom right corner */}
      <div className="w-full max-w-5xl flex justify-end mt-4">
        <div className="flex gap-3">
          <button
            onClick={() => scrollLeft(getRef())}
            className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => scrollRight(getRef())}
            className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      {/* Content based on tab */}
      <div className="mt-6 w-full max-w-5xl relative">
        {activeTab === "models" && (
          <div className="flex gap-6 overflow-x-auto scrollbar-hide" ref={modelRef}>
            {[model1, model2, model3].map((img, i) => (
              <img key={i} src={img} alt={`Model ${i + 1}`} className={sharedImgClasses} />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="flex gap-6 overflow-x-auto scrollbar-hide" ref={videoRef}>
            {[video1, video2, video3].map((vid, i) => (
              <video
                key={i}
                src={vid}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl w-64 h-64 object-cover flex-shrink-0"
              />
            ))}
          </div>
        )}

        {activeTab === "marketing" && (
          <div className="flex gap-6 overflow-x-auto scrollbar-hide" ref={marketingRef}>
            {[marketing1, marketing2, marketing3].map((img, i) => (
              <img key={i} src={img} alt={`Marketing ${i + 1}`} className={sharedImgClasses} />
            ))}
          </div>
        )}

        {activeTab === "photography" && (
          <div className="flex gap-6 overflow-x-auto scrollbar-hide" ref={photoRef}>
            {[product1, product2, product3].map((img, i) => (
              <img key={i} src={img} alt={`Product ${i + 1}`} className={sharedImgClasses} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}








