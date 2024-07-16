import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Donation from "./Components/Donation/Donation";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Stories from "./Components/SuccessStories/SuccessStories";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />

      {/* <Title subTitle="Our PROGRAM" title="What We Offer" /> */}
      {/* <Programs/> */}
      <About setPlayState={setPlayState} />
      <Donation />
      <div className="container">
      <Testimonials />
      </div>
      <Stories />
      <div className="container">
        {/* <Title subTitle="Gallery" title="Donation Photos" /> */}

        {/* <Title subTitle="TESTIMONIALS" title="What Student Says" /> */}
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
