import "./Sidebar.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Avatar from "./Avatar";

function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {user && <Avatar src={user.photoURL} />}
          <p>Hey {user ? user.displayName : "user, please log in"}</p>
        </div>
      </div>
      <nav className="links">
        {user && (
          <ul>
            <li>
              <NavLink end to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Sidebar;
