import { FaCheck, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function ComparisonSection() {
  const sections = [
    {
      title: "",
      features: [
        { name: "Custom model image generation", desc: "Create images with models trained on your products" },
        { name: "On model photography", desc: "Generate images with products on models" },
        { name: "Instant image generation", desc: "Quickly generate product images without training" },
        { name: "Background image regeneration", desc: "Recreate and modify image backgrounds" },
        { name: "Video generation", desc: "Create product videos with AI" },
        { name: "Ad generation", desc: "Generate advertising creative automatically" },
        { name: "AI editing tools", desc: "Edit and refine images with AI assistance" },
      ],
    },
    {
      title: "ON BRAND CUSTOMIZATION",
      features: [
        { name: "Brand asset management", desc: "Manage your brand assets in one place" },
        { name: "Template customization", desc: "Design custom brand templates" },
        { name: "Brand consistency checks", desc: "Ensure brand style across all assets" },
      ],
    },
  ];

  const flairSupports = [true, true, true, true, true, true, true, true, true, true];
  const pebblySupports = [false, false, false, true, false, false, false, false, false, false];
  const botikaSupports = [true, true, false, true, false, true, true, false, false, false];
  const claidSupports = [true, true, false, false, false, false, true, false, false, false];

  const companies = ["Flair", "Pebbly", "Botika", "Claid"];
  const getSupportsArray = (index) => [
    flairSupports[index],
    pebblySupports[index],
    botikaSupports[index],
    claidSupports[index],
  ];

  return (
    <section className="py-20 px-4 md:px-6 w-[95%] md:w-[85%] mx-auto bg-black">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">
          How does Flair compare?
        </h2>
        <p className="text-gray-400 text-lg">
          See how Flair stacks up against other AI product photography platforms.
        </p>
      </div>

      {/* Scrollable Table (Mobile + Desktop) */}
      <div className="overflow-x-auto rounded-2xl border border-gray-700 bg-[#0D0D0D]/70 backdrop-blur-md">
        <table className="min-w-[700px] md:min-w-full table-fixed">
          <thead>
            <tr className="text-gray-400">
              <th className="text-left py-4 px-6 w-1/2">Features</th>
              {companies.map((c, idx) => (
                <th key={idx} className="text-center py-4 px-4">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sections.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                {section.title !== "" && (
                  <tr>
                    <td className="py-4 px-6 text-left text-gray-400 uppercase tracking-wide text-sm" colSpan={5}>
                      {section.title}
                    </td>
                  </tr>
                )}

                {section.features.map((feature, i) => {
                  const featureIndex = sectionIndex === 0 ? i : 7 + i;
                  const supports = getSupportsArray(featureIndex);

                  return (
                    <motion.tr
                      key={i}
                      className="border-b border-gray-700 hover:bg-gray-800/30"
                      initial={{ opacity: 0, y: 60, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.07 }}
                    >
                      <td className="py-4 px-6">
                        <div className="text-white font-medium">{feature.name}</div>
                        <div className="text-gray-400 text-sm">{feature.desc}</div>
                      </td>
                      {supports.map((supported, idx) => (
                        <td key={idx} className="py-4 px-4 text-center">
                          {supported ? (
                            <div className="w-6 h-6 mx-auto flex items-center justify-center rounded-full bg-green-600/30">
                              <FaCheck className="text-green-500 text-sm" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 mx-auto flex items-center justify-center rounded-full bg-gray-500/20">
                              <FaTimes className="text-gray-400 text-sm" />
                            </div>
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
