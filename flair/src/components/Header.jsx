import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const words = ["photoshoots", "videos", "marketing", "content"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col justify-center items-center text-center px-6 py-20 bg-black text-white"
    >
      <h1 className="text-5xl md:text-8xl font-light leading-tight max-w-4xl">
        The AI design tool for{" "}
        <span className="relative inline-block text-lime-400 font-semibold">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute left-0"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
          
          <span className="opacity-0">{words[index]}</span>
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-400 max-w-2xl">
        Build stunning AI product content with your team in real-time.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-lime-500">
          Get Started – It's Free
        </button>
        <button className="bg-transparent border border-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Book a Demo
        </button>
      </div>
    </motion.header>
  );
}
