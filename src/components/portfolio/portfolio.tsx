import "./portfolio.scss"
import { BsGithub } from 'react-icons/bs'
import cpp from './img/Cpp.png'
import restapi from './img/REST.png'
import postman from './img/Postman.png'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"
import Gallery from '../gallery/gallery';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

function Portfolio() {
  const Root = styled('div')(() => ({
    width: '100%',
  }));

  useEffect(() => {
    AOS.init({ duration: 1000, delay: "100" });
  }, []);

  const handleGithubLink = () => {
    window.open("https://github.com/navidasaman", "_blank", "noopener noreferrer");
  };

  return (
    <div className='portfolioContainer'>
      {/*Intro*/}
      <svg className="heading">
        <text x="50%" y="50%" dy=".5em">
          Portfolio
        </text>
      </svg>
      <p className="portfolioParagraph" data-aos="fade-up"> I am driven by my passion for creating exceptional online experiences.
        With a genuine interest in understanding technology and people.
        I strive to deliver innovative and user-friendly websites that leave a lasting impact.
        I believe in the power of technology to connect people and enhance their lives, and I am dedicated to bringing that vision to life through my coding skills and attention to detail.
        With every project, I approach it with excitement and a commitment to excellence, ensuring that the final product exceeds expectations. </p>

      {/*Projects*/}
      <div className="gallery" data-aos="fade-up">
        < Gallery />
      </div>
      <p className="portfolioParagraphB">Here are some of the projects I've worked on. Feel free to scroll through them. To see more visit my:</p>
       <button onClick={handleGithubLink} className="button">
          <span className="text">GitHub |</span> <span className="icon"> <BsGithub  /></span>        
      </button> 
      {/* <hr style={{ backgroundColor: 'aqua', marginTop: '5%', borderRadius: '50%', opacity: '0.1' }} /> */}
      {/*Language/Frameworks/Libraries/Softwares Experience*/}
      <div className="experienceInContainer">
        <Root>
          <Divider sx={{
            "&::before, &::after": {
              borderColor: "#fff",
              opacity: '0.15',
              borderRadius: '40%',
              height: 2,
            },
          }}>
            <h3 className="experienceIn" data-text="Experience in:">Experience in:</h3>
          </Divider>
        </Root>
      </div>
      <div className="skills" data-aos="fade-up">
        <Tooltip title="HTML" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html5 icon svg" /></Tooltip>
        <Tooltip title="CSS" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css3 icon svg" /></Tooltip>
        <Tooltip title="JavaScript" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="javascript icon svg" /></Tooltip>
        <Tooltip title="TypeScript" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="typescript icon svg" /></Tooltip>
        <Tooltip title="React" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react icon svg" /></Tooltip>
        <Tooltip title="MySQL" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="mysql icon svg" /></Tooltip>
        <Tooltip title="Node.js" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs icon svg" /></Tooltip>
        <Tooltip title="Java" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="java icon svg" /></Tooltip>
        <Tooltip title="PHP" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="php icon svg" /></Tooltip>
        <Tooltip title="C++" arrow><img src={cpp} alt="C++ icon" ></img></Tooltip>
        <Tooltip title="SASS/SCSS" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass icon svg" /></Tooltip>
        <Tooltip title="Bootstrap" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="bootstrap icon svg" /></Tooltip>
        <Tooltip title="TailwindCSS" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="TailwindCSS icon svg" /></Tooltip>
        <Tooltip title="D3.js" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" alt="d3.js icon svg" /></Tooltip>
        <Tooltip title="Git" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="git icon svg" /></Tooltip>
        <Tooltip title="GitHub" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github icon svg" /></Tooltip>
        <Tooltip title="FileZilla" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg" alt="filezilla icon svg" /></Tooltip>
        <Tooltip title="Markdown" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt="markdown icon svg" /></Tooltip>
        <Tooltip title="InkScape" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-plain-wordmark.svg" alt="inkscape icon svg" /></Tooltip>
        <Tooltip title="Visual Studio Code" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg" alt="visual studio code icon svg" /></Tooltip>
        <Tooltip title="ExpressJS" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express.js icon svg" /></Tooltip>
        <Tooltip title="Android Studio" arrow><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original-wordmark.svg" alt="android studio code icon svg" /></Tooltip>
        <Tooltip title="Postman" arrow><img src={postman} alt="postman icon" ></img></Tooltip>
        <Tooltip title="RESTful API" arrow><img src={restapi} alt="resp icon" ></img></Tooltip>
        

      </div>
    </div>
  )
}

export default Portfolio
