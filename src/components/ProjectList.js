import "./ProjectList.css";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map((doc) => (
        <div key={doc.id}>{doc.name}</div>
      ))}
    </div>
  );
}

export default ProjectList;
