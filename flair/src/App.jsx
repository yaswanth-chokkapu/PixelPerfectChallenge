import BrandsSection from "./components/Brand";
import ComparisonSection from "./components/FairSection";
import Footer from "./components/Footer";
import Hero from "./components/Header";
import Icons from "./components/Icon";
import Navbar from "./components/Navbar";
import VideoPlay from "./components/Videoplay";
import HeroSection from "./components/models";
import Section from "./components/section";



import Template from "./components/template";
import Template2 from "./components/template2";



export const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <VideoPlay/>
      <BrandsSection/>
      <HeroSection />
     <Icons/>
       <Template/>
            <Template2/>
      <Section/>

      <ComparisonSection/>
      <Footer/>
    </div>
  );
};

export default App;
