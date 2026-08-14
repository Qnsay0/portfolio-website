import { portfolioData } from "@/data/constans";
import "@/app/projects/style.css";

export default function Projects() {
  return (
    <div className="projectsContainer">
      <div className="contentBox">
        <div className="projectTextContentBox">
          <h1>{portfolioData.projects.title}</h1>
          <p>{portfolioData.projects.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
