import Hero from './components/hero/Hero';
import Navigation from './components/navigation/Navigation';
import Section1 from './components/sections/section1/Section1';
import { useEffect } from 'react';
import Section2 from './components/sections/section2/Section2';

function App() {
  // const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // setWindowWidth(window.innerWidth);
      localStorage.setItem('windowWidth', window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Section1 />
      <Section2 />
    </>
  );
}

export default App;
