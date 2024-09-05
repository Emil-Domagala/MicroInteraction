import Hero from './components/hero/Hero';
import Navigation from './components/navigation/Navigation';
import Section1 from './components/sections/section1/Section1';
import { useEffect } from 'react';

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
      <Section1/>
    </>
  );
}

export default App;
