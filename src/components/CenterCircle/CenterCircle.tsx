import { useState } from "react";
import "./center-circle.scss";
const CenterCircle = () => {
  const [displayLinks, setDisplayLinks] = useState(false);
  return (
    <div
      className=" center-circle circle"
      onClick={() => {
        setDisplayLinks(!displayLinks);
      }}
    >
      <h1>
        <span>C</span>
        <span>o</span>
        <span>n</span>
        <span>n</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
        <span>-</span>
        <span>W</span>
        <span>i</span>
        <span>t</span>
        <span>h</span>
        <span>-</span>
        <span>M</span>
        <span>e</span>
        <span>-</span>
      </h1>
      <div className="links__container">
        <Link
          iClassName="devicon-github-plain"
          href="https://github.com/piacib"
          displayLinks={displayLinks}
        />
        <Link
          iClassName="devicon-linkedin-plain"
          href="https://www.linkedin.com/in/ben-piacitelli-325436212/"
          displayLinks={displayLinks}
        />
        <Link
          iClassName="devicon-codepen-plain"
          href="https://codepen.io/ben-piacitelli"
          displayLinks={displayLinks}
        />
        {/* <i
          className={`devicon-github-plain ${
            displayLinks ? "display-links" : "display-none"
          }`}
        ></i>
        <i
          className={`devicon-github-original ${
            displayLinks ? "display-links" : "display-none"
          }`}
        ></i>
        <i
          className={`devicon-codepen-plain ${
            displayLinks ? "display-links" : "display-none"
          }`}
        ></i> */}
      </div>
    </div>
  );
};
interface LinkProps {
  iClassName: string;
  href: string;
  displayLinks: boolean;
}
const Link = ({ iClassName, href, displayLinks }: LinkProps) => (
  <a
    href={href}
    className={`${displayLinks ? "display-links" : "display-none"}`}
  >
    <i className={iClassName}></i>
  </a>
);

export default CenterCircle;
