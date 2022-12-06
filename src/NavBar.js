import logo from "./logo.png";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <div
      className="navbar bg-base-100"
      style={{ backgroundColor: "#1C1C1E", position: "fixed" }}
    >
      <div className="flex-1">
        <a href="#about">
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{
              height: "50px",
              width: "50px",
              padding: "3px",
            }}
          ></img>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>
              <span style={{ color: "teal" }}>01.</span> About
            </a>
          </li>
          <li>
            <a>
              <span style={{ color: "teal" }}>02.</span> Projects
            </a>
          </li>
          <li>
            <a>
              <span style={{ color: "teal" }}>03.</span> Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    // <nav className="navBar">
    //   <div style={{ marginLeft: "2.5vw" }}>
    //     <a className="logoAnchor" href="#bio">
    // <img
    //   className="logo"
    //   src={logo}
    //   alt="logo"
    //   style={{
    //     height: "50px",
    //     width: "50px",
    //     padding: "3px",
    //   }}
    // />
    //     </a>
    //   </div>

    //   <ul>
    //     <li>
    //       <a href="#about">
    // <span style={{ color: "teal" }}>01.</span> About
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#projects">
    // <span style={{ color: "teal" }}>02.</span> Projects
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#contact">
    // <span style={{ color: "teal" }}>03.</span> Contact
    //       </a>
    //     </li>
    //     <Button
    //       variant="outlined"
    //       style={{
    //         color: "teal",
    //         borderColor: "teal",
    //         fontSize: "1vw",
    //         fontWeight: "800",
    //         fontFamily: "'Fira Code', monospace",
    //         border: "2px solid",
    //       }}
    //     >
    //       Resume
    //     </Button>
    //   </ul>
    // </nav>
  );
}
