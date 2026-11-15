import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Banner from "./Banner";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import ContactPage from "./ContactME";
import Footer from "./Footer";
import { MotionProvider } from "./motion";

const MainPage = () => {
  return (
    <MotionProvider>
      <Navbar />
      {/* clip sideways reveal offsets so they never cause horizontal scroll */}
      <main className="overflow-x-clip">
        <HeroSection />
        <Banner />
        <div className="bg-paper">
          <About />
          <Experience />
          <Skills />
        </div>
        <Portfolio />
        <div className="bg-paper">
          <ContactPage />
        </div>
      </main>
      <Footer />
    </MotionProvider>
  );
};

export default MainPage;
