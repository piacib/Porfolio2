import "./App.scss";
import "./normalize.css";
import "./components/LandingPage/style.scss";
import "./sidebar.scss";
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
    <i className={iClassName}></i>
  </a>
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
