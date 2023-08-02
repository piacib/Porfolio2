import "./styles.scss";
import headshot from "../../assets/headshot.jpg";
import CenterCircle from "../CenterCircle/CenterCircle";
const AboutMeBlurb = () => {
  return (
    <>
      <div className="skills-connect__container flex-row">
        <Skills />
        {/* <CenterCircle /> */}
        <div></div>
      </div>
      <div className="about-me-blurb__container">
        {/* <img
        src={headshot}
        alt="Personal Headshot"
        className="circle profile-image"
      /> */}
        <p className="about-me-blurb">
          I am an aspiring front end web developer currently searching for a
          job. My passion for web development started a couple years back and I
          have been teaching myself front end web development ever since. I have
          learned a lot by teaching myself but I am now ready to progress my
          coding profesionally and learn more about the world of front end web
          development! I graduated for the University of Washington in 2019 with
          a degree in Physics and Astronomy.
        </p>
      </div>
    </>
  );
};
const icons = [
  "devicon-javascript-plain",
  "devicon-html5-plain-wordmark",
  "devicon-react-original",
  "devicon-python-plain",
  "devicon-linux-plain",
  "devicon-github-original",
  "devicon-css3-plain-wordmark",
  "devicon-typescript-plain",
  "devicon-sass-original",
];
const Skills = () => (
  <>
    <ul className="skills-list flex-col">
      {icons.map((icon, idx) => (
        <li>
          <i key={icon + idx} className={`skills_icon ${icon}`}></i>
        </li>
      ))}
    </ul>
  </>
);
export default AboutMeBlurb;
