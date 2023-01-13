import logo from "./logo.png";
import Button from "@mui/material/Button";
import resume from "./Resume.pdf";
import { useState } from "react";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

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
                  height: "40px",
                  width: "40px",
                }}
              />
            </a>
          </div>
        </div>
        <>
          {showSidebar ? (
            <button
              className="flex text-4xl text-white items-center cursor-pointer fixed right-5 z-50"
              onClick={() => setShowSidebar(!showSidebar)}
              style={{ color: "teal" }}
            >
              x
            </button>
          ) : (
            <svg
              onClick={() => setShowSidebar(!showSidebar)}
              className="z-30 flex items-center cursor-pointer right-10 top-6"
              fill="teal"
              viewBox="0 0 100 80"
              width="40"
              height="40"
              style={{ marginRight: "3vw", background: "#1c1c1e" }}
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          )}

          <div
            className={`top-0 right-0 text-white fixed h-full z-40  ease-in-out duration-300 ${
              showSidebar ? "translate-x-0 " : "translate-x-full"
            }`}
            style={{
              background: "#2c2c2e",
              width: "60vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul
              class="px-6 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0"
              style={{
                textAlign: "center",
                padding: "20vw",
              }}
            >
              <li onClick={() => setShowSidebar(false)}>
                <a
                  href="#about"
                  style={{
                    color: "#dadada",
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ color: "teal", fontSize: "16px" }}>01. </span>
                  About
                </a>
              </li>
              <li onClick={() => setShowSidebar(false)}>
                <a
                  href="#projects"
                  style={{
                    color: "#dadada",
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ color: "teal", fontSize: "16px" }}>02. </span>
                  Projects
                </a>
              </li>
              <li onClick={() => setShowSidebar(false)}>
                <a
                  href="#contact"
                  style={{
                    color: "#dadada",
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ color: "teal", fontSize: "16px" }}>03. </span>
                  Contact
                </a>
              </li>
              <li onClick={() => setShowSidebar(false)}>
                <a href={resume} target="_blank">
                  <Button
                    variant="outlined"
                    style={{
                      color: "#1c1c1e",
                      borderColor: "#2c2c2e",
                      fontSize: "18px",
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
        </>
      </div>
    </>
  );
}

// <input
//   type="checkbox"
//   name="hamburger"
//   id="hamburger"
//   class="peer"
//   hidden
// />
// <label
//   for="hamburger"
//   class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
// >
//   <div
//     id="one"
//     aria-hidden="true"
//     class="m-auto h-1 w-10 rounded bg-sky-900 transition duration-300"
//     style={{ background: "teal" }}
//   ></div>
//   <div
//     id="two"
//     aria-hidden="true"
//     class="m-auto mt-2 h-1 w-10 rounded bg-sky-900 transition duration-300"
//     style={{ background: "teal" }}
//   ></div>
//   <div
//     id="three"
//     aria-hidden="true"
//     class="m-auto mt-2 h-1 w-10 rounded bg-sky-900 transition duration-300"
//     style={{ background: "teal" }}
//   ></div>
// </label>
// <div
//   class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0"
//   style={{
//     background: "#2c2c2e",
//     border: "none",
//     zIndex: "10",
//   }}
// >
//   <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
//     <ul class="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
//       <a
//         href="#about"
//         style={{ color: "#dadada", fontSize: "24px" }}
//       >
//         <label
//           for="hamburger"
//           class="peer-checked:hamburger cursor-pointer"
//         >
//           <span style={{ color: "teal" }}>01.</span> About
//         </label>
//       </a>
//       <li>
//         <a
//           href="#projects"
//           style={{ color: "#dadada", fontSize: "24px" }}
//         >
//           <span style={{ color: "teal" }}>02.</span> Projects
//         </a>
//       </li>
//       <li>
//         <a
//           href="#contact"
//           style={{ color: "#dadada", fontSize: "24px" }}
//         >
//           <span style={{ color: "teal" }}>03.</span> Contact
//         </a>
//       </li>
//       <li>
//         <a href={resume} target="_blank">
//           <Button
//             variant="outlined"
//             style={{
//               color: "#1c1c1e",
//               borderColor: "#1c1c1e",
//               fontSize: "16px",
//               fontWeight: "bold",
//               fontFamily: "'Fira Code', monospace",
//               border: "2px solid",
//               background: "teal",
//               borderRadius: "10px",
//             }}
//           >
//             Resume
//           </Button>
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>
