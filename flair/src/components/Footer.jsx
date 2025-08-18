import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const hoverClass = "hover:text-white transition-colors duration-300 cursor-pointer";

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            {["Pricing", "Enterprise", "Careers", "Terms of Service", "Blog", "FAQ"].map(
              (item) => (
                <li key={item} className={hoverClass}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Key Features</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "Bulk Content Generation",
              "On Model Photography",
              "AI Product Videos",
              "AI Marketing & Ads",
              "AI Human Builder",
              "Flair API",
            ].map((item) => (
              <li key={item} className={hoverClass}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Product Categories</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "AI Beauty",
              "AI Consumer Packaged Goods",
              "AI Jewelry",
              "AI Fashion Models",
              "AI Furniture",
              "AI Technology",
              "AI Handbags",
              "AI Food",
            ].map((item) => (
              <li key={item} className={hoverClass}>
                {item}
              </li>
            ))}
          </ul>
        </div>

     
        <div>
          <h3 className="font-semibold text-lg mb-4">Editing Tools</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "Regenerate Product",
              "Regenerate Human",
              "Magic Erase",
              "Upscale",
              "Virtual Try On",
              "Enhance Image Resolution",
              "Generate Variations",
              "Extend Image Dimensions",
              "View all tools",
            ].map((item) => (
              <li key={item} className={hoverClass}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row mx-auto justify-between items-center">
        <p className="text-gray-400 mx-20 text-sm">© 2025 Flair AI. All rights reserved.</p>
        <div className="flex mt-4 mx-20 md:mt-0 space-x-4 text-gray-400 text-xl">
          <a href="#" aria-label="Twitter" className={hoverClass}><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn" className={hoverClass}><FaLinkedin /></a>
          <a href="#" aria-label="Instagram" className={hoverClass}><FaInstagram /></a>
          <a href="#" aria-label="YouTube" className={hoverClass}><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}
