import { Link } from "react-router-dom";
import "./Navbar.css";
import Temple from "../assets/temple.svg";
import { useLogout } from "../hooks/useLogout";
import Loading from "./Loading";
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar() {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();

  console.log({ isPending });
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        <li>
          {user && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && <Loading />}
          {error && <p className="error">{error}</p>}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
