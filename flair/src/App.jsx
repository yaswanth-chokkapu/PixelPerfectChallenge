import BrandsSection from "./components/Brand";
import ComparisonSection from "./components/FairSection";
import Footer from "./components/Footer";
import Hero from "./components/Header";
import Navbar from "./components/Navbar";
import VideoPlay from "./components/Videoplay";
import HeroSection from "./components/models";
import Icons from "./components/Icons";
import Template from "./components/Template";
import Template2 from "./components/Template2";
import Section from "./components/section";



export const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <VideoPlay/>
      <BrandsSection/>
      <HeroSection />
     <Icons />
       <Template />
            <Template2 />
      <Section />

      <ComparisonSection/>



      <Footer/>
    </div>
  );
};

export default App;
