import { BsLinkedin, BsGithub } from "react-icons/bs";
import './footer.scss'

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const handleLinkedInLink = () => {
        window.open("https://www.linkedin.com/in/navidasaman/", "_blank", "noopener noreferrer");
    };

    const handleGithubLink = () => {
        window.open("https://github.com/navidasaman", "_blank", "noopener noreferrer");
    };

  return (
    <div>
        <div id="footer" className="footerContainer">
        <div className="socials">
            <BsLinkedin className="ln" onClick={handleLinkedInLink} />
            <BsGithub className="gh"  onClick={handleGithubLink} />
        </div>
            <div className="copyRightContainer">
                <div className="copyrightNotice">
                    Navida Saman - {currentYear}
                </div>
            </div>
        </div>
    </div>
  )
}

