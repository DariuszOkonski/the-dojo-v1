import "./Project.css";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import Loading from "../../components/Loading";

function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  console.log("document", document);
  console.log("error", error);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <Loading />;
  }

  return (
    <div className="project-details">
      <h1>{document.name}</h1>
    </div>
  );
}

export default Project;
