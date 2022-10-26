import { Link } from "react-router-dom";
import "./Navbar.css";
import Temple from "../assets/temple.svg";
import { useLogout } from "../hooks/useLogout";
import Loading from "./Loading";

function Navbar() {
  const { logout, error, isPending } = useLogout();

  console.log({ isPending });
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
          {isPending && <Loading />}
          {error && <p className="error">{error}</p>}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
