import "./OnlineUsers.css";
import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

function OnlineUsers() {
  const { documents, error } = useCollection("users");
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div className="user-list-item" key={user.id}>
            <span
              className={`${user.online ? "online" : "offline"}-user`}
            ></span>
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}

export default OnlineUsers;
