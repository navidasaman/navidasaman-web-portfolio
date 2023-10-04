import "./portfolio.scss"
import { BsChevronLeft, BsChevronRight, BsGithub } from 'react-icons/bs'
import cpp from './img/Cpp.png'
import plannerapp from './img/plannerapp.png'
import historyapp from './img/historyapp.png'
import todoapp from './img/todoapp.png'
import tictactoe from './img/tictactoe.png'
import parallaxeffect from './img/parallaxeffect.png'
import landingpage from './img/landingpage.png'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"

function Portfolio() {
  
  useEffect(() => {
    AOS.init({duration:1000, delay: "100"});
  }, []);

  return (
    <div className='portfolioContainer'>
      {/*Intro*/}
      <div className="portfolioHeading"> <BsChevronLeft /> Portfolio /<BsChevronRight /></div>
      <p className="portfolioParagraph"> I am driven by my passion for creating exceptional online experiences.
        With a genuine interest in understanding technology and people.
        I strive to deliver innovative and user-friendly websites that leave a lasting impact.
        I believe in the power of technology to connect people and enhance their lives, and I am dedicated to bringing that vision to life through my coding skills and attention to detail.
        With every project, I approach it with excitement and a commitment to excellence, ensuring that the final product exceeds expectations. </p>
      <p>Here are some of the projects I've worked on. Feel free to scroll through them. To see more visit my:
        <a className='linkSocials' href="https://github.com/navidasaman/" target="_blank" rel="noopener noreferrer">
          GitHub <BsGithub />
        </a>
      </p>
      {/*Projects*/}
      <div className="scroll-container" data-aos="fade-left">
        <div className="container">
          <img src={plannerapp} className="image" />
          <div className="middle">
            <a href="https://github.com/navidasaman/diary-app" target="_blank" rel="noopener noreferrer"> Diary App <BsGithub /></a>
          </div>
        </div>
        <div className="container">
          <img src={historyapp} className="image" />
          <div className="middle">
            <a href="https://github.com/navidasaman/History-App" target="_blank" rel="noopener noreferrer"> History App <BsGithub /></a>
          </div>
        </div>
        <div className="container">
          <img src={todoapp} className="image" />
          <div className="middle">
            <a href="https://github.com/navidasaman/ToDo-app" target="_blank" rel="noopener noreferrer"> To-Do App <BsGithub /></a>
          </div>
        </div>
        <div className="container">
          <img src={tictactoe} className="image" />
          <div className="middle">
            <a href="https://github.com/navidasaman/TicTacToe" target="_blank" rel="noopener noreferrer"> Tic Tac Toe <BsGithub /></a>
          </div>
        </div>
        <div className="container">
          <img src={parallaxeffect} className="image" />
          <div className="middle">
            <a href="https://navidasaman.github.io/saman-parallax-effect/" target="_blank" rel="noopener noreferrer"> Parallax Effect Website </a>
          </div>
        </div>
        <div className="container">
          <img src={landingpage} className="image" />
        </div>
      </div>
      {/*Language/Frameworks/Libraries/Softwares Experience*/}
      <h3 className="Experience">Experience in:</h3>
      <div className="skills">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg" />
        <img src={cpp}></img>
      </div>
    </div>
  )
}

export default Portfolio
