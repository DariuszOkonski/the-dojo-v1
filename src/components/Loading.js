import "./Loading.css";
import spinner from "../assets/loading-buffering.gif";

function Loading() {
  return (
    <div className="loading-page">
      <img src={spinner} alt="spinner" />
    </div>
  );
}

export default Loading;
