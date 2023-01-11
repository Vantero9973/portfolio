import logo from "./logo.png";
import Button from "@mui/material/Button";
import resume from "./Resume.pdf";

export default function Navbar() {
  return (
    <>
      <nav className="navBar">
        <div style={{ marginLeft: "2.5vw" }}>
          <a className="logoAnchor" href="#bio">
            <img
              className="logo"
              src={logo}
              alt="logo"
              style={{
                height: "50px",
                width: "55px",
                padding: "3px",
              }}
            />
          </a>
        </div>
        <ul>
          <li>
            <a href="#about">
              <span style={{ color: "teal" }}>01.</span> About
            </a>
          </li>
          <li>
            <a href="#projects">
              <span style={{ color: "teal" }}>02.</span> Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span style={{ color: "teal" }}>03.</span> Contact
            </a>
          </li>
          <a href={resume} target="_blank">
            <Button
              variant="outlined"
              style={{
                color: "#1c1c1e",
                borderColor: "#1c1c1e",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: "'Fira Code', monospace",
                border: "2px solid",
                background: "teal",
                borderRadius: "10px",
              }}
            >
              Resume
            </Button>
          </a>
        </ul>
      </nav>

      <div className="navbarTwo">
        <div
          className="navbar bg-base-100"
          style={{
            background: "#1c1c1e",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "2.5vw" }}>
            <a className="logoAnchor" href="#bio">
              <img
                className="logo"
                src={logo}
                alt="logo"
                style={{
                  height: "50px",
                  width: "50px",
                  padding: "3px",
                }}
              />
            </a>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              style={{ color: "teal" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              style={{ background: "#1c1c1e", border: "1px solid teal" }}
            >
              <li>
                <a href="#about">
                  <span style={{ color: "teal" }}>01.</span> About
                </a>
              </li>
              <li>
                <a href="#projects">
                  <span style={{ color: "teal" }}>02.</span> Projects
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span style={{ color: "teal" }}>03.</span> Contact
                </a>
              </li>
              <li>
                <a href={resume} target="_blank">
                  <Button
                    variant="outlined"
                    style={{
                      color: "#1c1c1e",
                      borderColor: "#1c1c1e",
                      fontSize: "16px",
                      fontWeight: "bold",
                      fontFamily: "'Fira Code', monospace",
                      border: "2px solid",
                      background: "teal",
                      borderRadius: "10px",
                    }}
                  >
                    Resume
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
