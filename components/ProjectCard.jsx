import { iconLinks } from "../information/iconLinks";
export const ProjectCard = ({
  projectTitle,
  projectTech,
  projectSummary,
  githubLink,
  liveLink,
}) => {
  return (
    <>
      <div class="card mb-3" style={{ width: 32 + "%" }}>
        <div class="card-body">
          <h5 class="card-title fs-3 align-middle">{projectTitle}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Technologies Used: {projectTech}
          </h6>
          <p class="card-text">{projectSummary}</p>
          <a href={githubLink} target="_blank" class="card-link">
            {iconLinks[0].icon}
          </a>
          <a
            className="text-decoration-none"
            href={liveLink}
            target="_blank"
            class="card-link px-2"
          >
            Live
          </a>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};
