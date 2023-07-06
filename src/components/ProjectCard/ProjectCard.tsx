import ProjectButtons from "../ProjectButtons/ProjectButtons";
import { ProjectContent } from "../Projects/projectsInfo";
import "./project-card.scss";
interface ProjectCardProps {
  id: string;
  data: ProjectContent;
}
const ProjectCard = ({ data, id }: ProjectCardProps) => {
  return (
    <div id={id} className="project_card flex-col">
      <div className={`project_content flex-col`}>
        <h2>{data.title}</h2>
          <img
            alt="project demo"
            src={data.imgLink}
            className="project-image greyscale"
          />
        <p>{data.text}</p>
        <ul className="skills_list flex-row margin-bottom--sm">
          {data.skillsClassNames.map((x) => (
            <li key={x}>
              <i className={`skills_icon ${x}`}></i>
            </li>
          ))}
        </ul>
      </div>

      <div className="button__container flex-row--space-around margin-bottom--sm margin-top--sm">
        <ProjectButtons repoHref={data.repoHref} demoHref={data.demoHref} />
      </div>
    </div>
  );
};
export default ProjectCard;
