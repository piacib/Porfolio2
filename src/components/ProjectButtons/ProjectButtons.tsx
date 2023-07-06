import "./project-buttons.scss";
interface Props {
  demoHref: string;
  repoHref: string;
}
const ProjectButtons = ({ demoHref, repoHref }: Props) => (
  <>
    <a
      className="projects_btn button-flip"
      data-back="Repo"
      data-front="Repo"
      href={repoHref}
    >
      Repo
    </a>
    {demoHref ? (
      <a
        className="projects_btn button-flip"
        data-back="Demo"
        data-front="Demo"
        href={demoHref}
      >
        Demo
      </a>
    ) : (
      <a
        className="coming-soon-a projects_btn button-flip "
        data-back="Coming Soon!"
        data-front="Coming Soon!"
        href="/"
      >
        Coming Soon!
      </a>
    )}
  </>
);
export default ProjectButtons;
