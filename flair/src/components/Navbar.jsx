import { motion } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navRef = useRef(null);

  const mobileMenuItems = [
    { name: "Features", link: "#" },
    { name: "Pricing", link: "#" },
    { name: "Enterprise", link: "#" },
    { 
      name: "Community Gallery", 
      link: "#", 
      subItems: [
        { name: "Projects", link: "#" },
        { name: "Inspiration", link: "#" },
      ]
    },
    { 
      name: "Resources", 
      link: "#", 
      subItems: [
        { name: "Docs", link: "#" },
        { name: "Tutorials", link: "#" },
      ]
    },
  ];

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-800 bg-black text-white relative">
      {/* Logo */}
      <div className="flex items-center gap-2 text-lg font-bold text-lime-400">
        <span className="w-5 h-5 bg-lime-400 rounded-sm"></span>
        Flair.ai
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        {mobileMenuItems.map((item) => (
          <a key={item.name} href={item.link} className="hover:text-white">{item.name}</a>
        ))}
      </div>

      {/* CTA */}
      <button className="hidden md:block bg-gray-900 border border-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800">
        Try Flair AI for free
      </button>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden text-gray-300 cursor-pointer" onClick={() => setOpen(!open)}>
        <Menu />
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center py-6 gap-4 md:hidden"
        >
          {mobileMenuItems.map((item) => (
            <div key={item.name} className="w-11/12 flex flex-col items-center">
              <div 
                className="flex justify-between items-center w-full px-6 py-3 cursor-pointer bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition-all"
                onClick={() => item.subItems && toggleDropdown(item.name)}
              >
                <a href={item.link} className="w-full text-center">{item.name}</a>
                {item.subItems && <ChevronDown className={`ml-2 transition-transform ${dropdownOpen === item.name ? "rotate-180" : ""}`} />}
              </div>
        
              {item.subItems && dropdownOpen === item.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="flex flex-col gap-2 w-full mt-2 pl-4 overflow-hidden"
                >
                  {item.subItems.map(sub => (
                    <a 
                      key={sub.name} 
                      href={sub.link} 
                      className="text-center bg-gray-800 rounded-md py-2 shadow-md hover:bg-gray-700 transition-all"
                    >
                      {sub.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          <button className="bg-gray-900 border border-gray-700 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-gray-800 mt-4 w-11/12 text-center">
            Try Flair AI for free
          </button>
        </motion.div>
      )}
    </nav>
  );
}

