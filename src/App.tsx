import './App.scss';
import Navbar from "./components/navbar/navbar"
import About from "./components/about/about"
import Portfolio from './components/portfolio/portfolio';
import CV from './components/CV/CV';
import Contact from './components/contact/contact'
import Footer from "./components/footer/footer";

function App() {
  const scrollTo = (elementRef: React.RefObject<HTMLElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
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