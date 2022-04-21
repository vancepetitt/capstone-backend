import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ fontSize:"larger", textDecoration: "none", color: "white", letterSpacing: "medium" }}>
            <b>Chem-Compatible App</b>
          </Link>
        </li>
        <li>
          <button onClick={() => navigate("/materials")}>Data by Material</button>
        </li>
        <li>
          <button onClick={() => navigate("/envexplorer")}>Environment Explorer</button>
        </li>
        <li>
          <button onClick={() => navigate("/input")}>Input Test Data</button>
        </li>
        {/* <li>
          <button onClick={() => navigate("/login")}>Login</button>
        </li> */}
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
