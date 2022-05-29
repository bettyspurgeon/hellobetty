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
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title fs-1">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill=""
              className="bi bi-code-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
            </svg>
            {projectTitle}
          </h5>
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
