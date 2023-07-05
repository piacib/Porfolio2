import AboutMeBlurb from "../AboutMeBlurb";
import ProjectsContainer from "../ProjectsContainer";
import "./style.scss";
const LandingPage = () => {
  return (
    <section className="landing-page__container">
      <div className="landing-page__left flex-col">
        <WelcomeText />
        <AboutMeBlurb />
        <Skills />
      </div>
      <CenterCircle />
      <div className="landing-page__right grid-center">
        <ProjectsContainer />
      </div>
    </section>
  );
};

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

const Skills = () => {
  return <></>;
};
const CenterCircle = () => {
  return <></>;
};
export default LandingPage;
