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
      <div className="card mb-3" style={{ width: 32 + "%" }}>
        <div className="card-body">
          <h5 className="card-title fs-3 align-middle">{projectTitle}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Technologies Used: {projectTech}
          </h6>
          <p className="card-text">{projectSummary}</p>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            {iconLinks[0].icon}
          </a>
          <a
            className="text-decoration-none"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="card-link px-2"
          >
            Live
          </a>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};
