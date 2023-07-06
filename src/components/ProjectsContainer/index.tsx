import Projects from "../Projects/Projects";
import "./projects-container.scss";
import headshot from "../../assets/headshot.png";

const ProjectsContainer = () => {
  return (
    <div
      onScroll={() => {
        // must be last element on page otherwise could scroll past
        if (document.body.clientWidth <= 1024) {
          window.scrollTo(0, document.body.scrollHeight);
        }
      }}
      className="projects__container y mandatory-scroll-snapping normal-stop"
    >
      <div className="projects-initial-page__container flex-col">
        <img
          src={headshot}
          alt="headshot"
          className="profile-image profile-image__large box-shadow-subtle"
        />
        <a
          className="button-flip"
          data-back="Check Out What I Have Built"
          data-front="Check Out What I Have Built"
          href="#Pokeinfo_container"
        />
      </div>
      <Projects />
    </div>
  );
};
export default ProjectsContainer;
