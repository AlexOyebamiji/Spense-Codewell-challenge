import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Footer from "./components/Footer";
import { split } from "./animations/text";
import scroll from "./animations/scroll";
import { useEffect } from "react";

scroll();

function App() {
  useEffect(() => {
    split();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </main>
  );
}

export default App;
