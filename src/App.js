import "./App.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MakesUsSpecial } from "./components/MakesUsSpecial";
import { InfoSection } from "./components/InfoSection";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MakesUsSpecial />
      <InfoSection />
      <Services />
      <Footer />
    </>
  );
}

export default App;
