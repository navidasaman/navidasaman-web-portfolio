import { Link } from 'react-scroll';
import "./navbar.scss"
import {BsList, BsChevronLeft, BsChevronRight, BsXLg} from 'react-icons/bs'
import {useState, useRef} from 'react'

interface NavbarProps {
  scrollTo: (elementRef: React.RefObject<HTMLElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollTo }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const home = useRef<HTMLElement>(null);
  const portfolio = useRef<HTMLElement>(null);
  const contact = useRef<HTMLElement>(null);
  const cv = useRef<HTMLElement>(null);

  const links = [
    { text: "Home", ref: "home" },
    { text: "Portfolio", ref: "portfolio" },
    { text: "CV", ref: "cv" },
    { text: "Contact", ref: "contact" }
  ];

  return (
    <div className={`navContainer ${isNavOpen ? 'open' : 'responsive'}`}>
      <nav className='navbar'>
        <a href="#home" className="logo"> 
          <span className="pre-logo">{isNavOpen && <BsChevronLeft/>}</span>
          <Link to="home" smooth={true} duration={1000}>navidasaman</Link>
          <span className="pre-logo">{isNavOpen && <BsChevronRight/>}</span>
        </a>
        <ul className={`${isNavOpen ? 'open' : 'responsive'}`}>
          {links.map((link, index) => (
            <li key={index} className="nav-items">
              <Link to={link.ref} smooth={true} duration={1000} onClick={() => scrollTo(eval(link.ref))}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <div>
          <button className="toggle-btn" onClick={toggleNav}>{isNavOpen ? <BsList /> : <BsXLg />}</button>
        </div>
      </nav>
    </div> 
  );
};

export default Navbar;
