import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Footer from "./components/Footer";
import useLocoScroll from "./components/animations/useLocoScroll";

function App() {
  useLocoScroll();
  return (
    <main data-scroll-container>
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
