import ProjectCard from "../ProjectCard/ProjectCard";
import "./projects.scss";
import projects from "./projectsInfo";
const Projects = () => {
  return (
    <>
      {projects.map((x, idx) => (
        <>
          <ProjectCard id={x.id()} key={x.title + idx} data={x} />
        </>
      ))}

      <a
        className={`button-flip margin-top--sm margin-bottom--sm current-project-button`}
        data-back="The Ezra Klein Podject"
        data-front="Checkout What I am Working On Now!"
        href="https://github.com/piacib/the_ezra_klein_podject"
      />
    </>
  );
};

export default Projects;
