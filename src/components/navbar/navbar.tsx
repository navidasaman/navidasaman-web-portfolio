import { Link } from 'react-scroll';
import "./navbar.scss"
import {BsList, BsChevronLeft, BsChevronRight, BsXLg} from 'react-icons/bs'
import {useState, useRef} from 'react'

interface NavbarProps {
  scrollTo: (elementRef: React.RefObject<HTMLElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollTo }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsResponsive(!isResponsive);
  };

  const home = useRef<HTMLElement>(null);
  const portfolio = useRef<HTMLElement>(null);
  const contact = useRef<HTMLElement>(null);
  const cv = useRef<HTMLElement>(null);

  return (
    <div>
      <div className={`navContainer ${isNavOpen ? 'open' : 'responsive'}`}>
        <nav className='navbar'>
          <a href="#home" className="logo"> 
            <span className="pre-logo"><BsChevronLeft/></span>
              <Link to="home" smooth={true} duration={1000} onClick={() => scrollTo(home)}>navidasaman</Link>
            <span className="pre-logo"><BsChevronRight/></span>
          </a>
          <ul className={`${isNavOpen ? 'open' : 'responsive'}`}>
            <li className="nav-items">
              <Link to="home" smooth={true} duration={1000} onClick={() => scrollTo(home)}>Home</Link>
            </li>
            <li className="nav-items">
              <Link to="portfolio" smooth={true} duration={1000} onClick={() => scrollTo(portfolio)}>Portfolio</Link>            
            </li>
            <li className="nav-items">
              <Link to="cv" smooth={true} duration={1000} onClick={() => scrollTo(cv)}>CV</Link>            
            </li>
            <li className="nav-items">
              <Link to="contact" smooth={true} duration={1000} onClick={() => scrollTo(contact)}>Contact</Link>            
            </li>
          </ul>
          <div>
            <button className="toggle-btn" onClick={toggleNav}>{isNavOpen ? <BsList /> : <BsXLg />}</button>
          </div>
        </nav>
      </div>
    </div> 
  )
}

export default Navbar
