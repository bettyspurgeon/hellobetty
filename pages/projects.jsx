import { ProjectCard } from "../components/ProjectCard";
export default function Projects() {
  return (
    <>
      <div className="vh-100 pt-5">
        <h1 className="text-center pb-2">My Projects</h1>
        <div className="d-flex flex-column flex-md-row col-10 mx-auto g-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
}
