import { FaCheck, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ComparisonSection() {
  const features = [
    {
      name: "Custom model image generation",
      desc: "Create images with models trained on your products",
    },
    {
      name: "On model photography",
      desc: "Generate images with products on models",
    },
    {
      name: "Instant image generation",
      desc: "Quickly generate product images without training",
    },
    {
      name: "Background image regeneration",
      desc: "Change or improve background images automatically",
    },
    {
      name: "AI marketing & ads",
      desc: "Create marketing visuals and ad creatives",
    },
    {
      name: "AI human builder",
      desc: "Generate human models automatically",
    },
  ];

  const flairSupports = [true, true, true, true, true, true];
  const pebblySupports = [false, false, false, true, false, false];
  const botikaSupports = [true, true, false, true, false, true];
  const claidSupports = [true, true, false, false, false, false];

  return (
    <section className="py-16 px-6 w-[75%] mx-auto bg-black">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          How does Flair compare?
        </h2>
        <p className="text-gray-400 text-lg">
          See how Flair stacks up against other AI product photography platforms.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-700">
        <table className="min-w-full table-fixed">
          <thead className="bg-gray-900">
            <tr>
              <th className="text-left py-4 px-6 text-gray-400 w-1/3">Features</th>
              <th className="text-center py-4 px-6 text-gray-400">Flair</th>
              <th className="text-center py-4 px-6 text-gray-400">Pebbly</th>
              <th className="text-center py-4 px-6 text-gray-400">Botika</th>
              <th className="text-center py-4 px-6 text-gray-400">Claid</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <motion.tr
                key={index}
                className="bg-gray-900 transition-colors duration-300 hover:bg-gray-800 border-b border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <td className="py-4 px-6 text-left">
                  <div className="font-semibold text-white">{feature.name}</div>
                  <div className="text-gray-400 text-sm">{feature.desc}</div>
                </td>
                <td className="py-4 px-6 text-center">
                  {flairSupports[index] ? <FaCheck className="text-green-500 mx-auto" /> : <FaTimes className="text-red-500 mx-auto" />}
                </td>
                <td className="py-4 px-6 text-center">
                  {pebblySupports[index] ? <FaCheck className="text-green-500 mx-auto" /> : <FaTimes className="text-red-500 mx-auto" />}
                </td>
                <td className="py-4 px-6 text-center">
                  {botikaSupports[index] ? <FaCheck className="text-green-500 mx-auto" /> : <FaTimes className="text-red-500 mx-auto" />}
                </td>
                <td className="py-4 px-6 text-center">
                  {claidSupports[index] ? <FaCheck className="text-green-500 mx-auto" /> : <FaTimes className="text-red-500 mx-auto" />}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
