import './App.scss';
import Navbar from "./components/navbar/navbar"
import About from "./components/about/about"
import Portfolio from './components/portfolio/portfolio';
import CV from './components/CV/CV';
import Contact from './components/contact/contact'
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";
import {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';

function App() {
  const scrollTo = (elementRef: React.RefObject<HTMLElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    
    
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Helmet>
        <title>Navida Saman Ul Haq Web Portfolio</title>
        <meta name="description" content="Hi, I'm Saman: a Web developer making the web an interesting and harmonius place to browse, enhancing user experience through effective design and pleasant experiences."/>
      </Helmet>
      <Navbar scrollTo={scrollTo} />
      <div className="home"><About /></div>
      <div className="portfolio"><Portfolio /></div>
      <div className="cv"><CV /></div>
      <div className="contact"><Contact /></div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
