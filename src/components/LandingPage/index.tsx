import "./style.scss";
const LandingPage = () => {
  return (
    <section className="landing-page_container">
      <div className="landing-page__left">
        <WelcomeText />
        <AboutMeBlurb />
        <Skills />
      </div>
      <CenterCircle />
      <div className="landing-right"></div>
    </section>
  );
};

const WelcomeText = () => {
  return (
    <h1 className="welcome-header">
      <span>Welcome To</span>
      <span>My Portfolio</span>
    </h1>
  );
};
const AboutMeBlurb = () => {
  return <></>;
};
const Skills = () => {
  return <></>;
};
const CenterCircle = () => {
  return <></>;
};
export default LandingPage;
