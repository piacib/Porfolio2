import Projects from "../Projects/Projects";
import "./projects-container.scss";
import headshot from "../../assets/headshot.png";

const ProjectsContainer = () => {
  return (
    <div className="projects__container">
      <div className="projects-initial-page__container flex-col">
        <div className="inner-square inset-shadow ">
          <img
            src={headshot}
            alt="headshot"
            className="profile-image profile-image__large inset-shadow"
          />
        </div>
        <a
          className="project-scroll-button button-flip"
          data-back="Check Out What I Have Built"
          data-front="Check Out What I Have Built"
          href="#Pokemon_Showdown_Extension"
        ></a>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsContainer;
