import "./App.scss";
import "./normalize.css";
import "./components/LandingPage/style.scss";
import "./sidebar.scss";
import LandingPage from "./components/LandingPage";
import AboutMeBlurb from "./components/AboutMeBlurb";
import ProjectsContainer from "./components/ProjectsContainer";
function App() {
  return (
    <div className="page__container">
      <div className="sidebar flex-col flex-justify-end  sticky-top">
        <Link
          iClassName="devicon-linkedin-plain"
          href="https://www.linkedin.com/in/ben-piacitelli-325436212/"
        />
        <Link
          iClassName="devicon-github-plain"
          href="https://github.com/piacib"
        />
        <div className="sidebar-line"></div>
      </div>
      <section className="landing-page__container">
        <div className="landing-page__left flex-col">
          <WelcomeText />
          <AboutMeBlurb />
        </div>
        <div className="landing-page__right grid-center">
          <ProjectsContainer />
        </div>
      </section>
      <div className="sidebar flex-col flex-justify-end sticky-top">
        <a href="mailto:ben.piacitelli@gmail.com" className="email">
          ben.piacitelli@gmail.com
        </a>
        <div className="sidebar-line"></div>
      </div>
    </div>
  );
}

export default App;
interface LinkProps {
  iClassName: string;
  href: string;
}
const Link = ({ iClassName, href }: LinkProps) => (
  <a href={href} className="sidebar-link">
    <i className={iClassName + " " + ""}></i>
  </a>
);
const Blob = () => (
  <svg
    className="blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="fill"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
        gradientTransform="rotate(296 0.5 0.5)"
      >
        <stop offset="0%" stop-color="#4F46E5"></stop>
        <stop offset="100%" stop-color="#7b8cff"></stop>
      </linearGradient>
    </defs>
    <path
      d="M82.5,69.5Q72,89,53,83Q34,77,25,63.5Q16,50,21,29.5Q26,9,46.5,14.5Q67,20,80,35Q93,50,82.5,69.5Z"
      stroke="none"
      stroke-width="0"
      fill="url(#fill)"
    ></path>
  </svg>
);
const WelcomeText = () => {
  return (
    <h1 className="welcome-header">
      <UnderlineText>Welcome To</UnderlineText>
      <UnderlineText reverse>My Portfolio</UnderlineText>
    </h1>
  );
};
interface Props {
  children: string;
  reverse?: boolean;
}
const UnderlineText = ({ children, reverse = false }: Props) => (
  <>
    <span>{children}</span>
    <div className={`underline${reverse ? " reverse" : ""}`}></div>
  </>
);
