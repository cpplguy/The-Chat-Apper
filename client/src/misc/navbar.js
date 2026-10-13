import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../authcontext";
import { deleteCookies } from "./deletecookies.js";
import "./navbar.css";
export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSettings = location.pathname === "/settings";
  const { isAuth } = useContext(AuthContext);
  if (location.pathname !== "/bannedPage") {
    return (
      <nav>
        <div id="nav-container">
          <h4 id="logo" onClick={() => navigate("/")} style={{visibility: location.pathname.includes("raw") ? "hidden" : "visible"}}>
            {" "}
            <span id="code-symbols">{"<"}</span>The{" "}
            <span id="green">
              Chat<span id="black"> Apper</span>
            </span>
            <span id="code-symbols">{"/>"}</span>
            <br />
            <span
              className="sub-text"
              id={(!location.pathname.includes("chat") && "white") || "black" }
            >
              A chatting space made for everyone
            </span>
          </h4>
          <button
            id="settings"
            style={{ display: isAuth.auth ? "flex" : "none" }}
            onClick={() => navigate(`${isSettings ? "/" : "/settings"}`)}
          >
            <h3>{isSettings ? "Go Back" : "Settings"}</h3>
          </button>
          <button
            id="logout"
            style={{ display: isAuth.auth ? "flex" : "none" }}
            onClick={deleteCookies}
          >
            <h3>Log Out</h3>
          </button>
          <button
            id="admin"
            style={{ display: isAuth.isAdmin ? "flex" : "none" }}
            onClick={() => navigate("/admin")}
          >
            <h3>Admin</h3>
          </button>

          {/*<button onClick = {() => navigate("/about")}>About</button>*/}
        </div>
      </nav>
    );
  }
}
