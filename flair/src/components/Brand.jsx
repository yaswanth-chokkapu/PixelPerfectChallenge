import { motion } from "framer-motion";
import amazonLogo from "../assets/amazon.png";
import googleLogo from "../assets/google.png";
import microsoftLogo from "../assets/microsoft.png";
import facebookLogo from "../assets/face.jpg";

export default function BrandsSection() {
  const brands = [amazonLogo, googleLogo, microsoftLogo, facebookLogo];

  const repeatCount = 8;
  const logos = Array(repeatCount).fill(brands).flat();

  return (
    <section className="w-full py-16 bg-gray-900 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        Used by brands of all sizes and industries
      </h2>

      <div className="w-[75%] overflow-hidden relative">
        <motion.div
          className="flex"
          animate={{ x: [0, -brands.length * 136] }} 
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: brands.length * 3,
            ease: "linear",
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-32 h-32 mx-2 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg"
              animate={{
                scale: [1, 1.15, 1], 
              }}
              transition={{
                duration: brands.length * 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            >
              <img
                src={logo}
                alt={`brand-${index}`}
                className="w-20 h-20 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
