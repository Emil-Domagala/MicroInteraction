import Hero from './components/hero/Hero';
import Navigation from './components/navigation/Navigation';
import Section1 from './components/sections/section1/Section1';
import Section2 from './components/sections/section2/Section2';
import Section3 from './components/sections/section3/Section3';
import Section4 from './components/sections/section4/Section4';
import Section5 from './components/sections/section5/Section5';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}

export default App;
