import pokemon from "./pokemonFlatiron.png";
import portfolio from "./PortfolioScreenshot.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Projects() {
  return (
    <>
      <a
        className="projectsAnchor"
        id="projects"
        style={{ marginBottom: "10px" }}
      ></a>
      <div className="defaultProjects">
        <div
          style={{
            marginTop: "200px",
            marginLeft: "10vw",
            maxWidth: "500px",
          }}
        >
          <h2 style={{ fontSize: "32px", color: "#dadada", fontWeight: "800" }}>
            <span
              style={{
                color: "teal",
                fontSize: "24px",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              02.
            </span>
            Projects
          </h2>
        </div>
        <div
          // data-aos-easing="linear"
          // data-aos-duration="500"
          // data-aos="zoom-in-left"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "row",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <div style={{ boxShadow: "0 0 8px teal" }}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: "35vw" }}
                image="https://i.imgur.com/M33hXMW.jpg"
                alt="Parts Undefined"
              />
            </Card>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <h1
              style={{ fontSize: "32px", fontWeight: "800", color: "#dadada" }}
            >
              Parts Undefined
            </h1>
            <p
              style={{ maxWidth: "400px", fontWeight: "600", color: "#a9a9a9" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div style={{ display: "flex" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="React"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png"
                alt="Rails"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png"
                alt="SQL"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/bootstrap-7-1175254.png"
                alt="Bootstrap"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <a href="https://pu.vergeyle.net/" target="_blank">
              <Button
                variant="outlined"
                style={{
                  color: "teal",
                  borderColor: "teal",
                  marginTop: "10px",
                  borderRadius: "10px",
                }}
              >
                Demo
              </Button>
            </a>
            <a
              href="https://github.com/Vantero9973/parts-unknown"
              target="_blank"
            >
              <Button
                variant="outlined"
                style={{
                  color: "teal",
                  borderColor: "teal",
                  marginLeft: "20px",
                  marginTop: "10px",
                  borderRadius: "10px",
                }}
              >
                Source Code
              </Button>
            </a>
          </div>
        </div>
        <div
          // data-aos-easing="linear"
          // data-aos-duration="500"
          // data-aos="zoom-in-right"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "50px",
            marginLeft: "50px",
            marginBottom: "50px",
          }}
        >
          <div style={{ marginRight: "50px" }}>
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "800",
                textAlign: "right",
                color: "#dadada",
              }}
            >
              Pokemon Flatiron
            </h1>
            <p
              style={{
                maxWidth: "400px",
                fontWeight: "600",
                textAlign: "right",
                color: "#a9a9a9",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="React"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                alt="HTML"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                alt="CSS"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  color: "teal",
                  borderColor: "teal",
                  marginRight: "20px",
                  marginTop: "10px",
                  borderRadius: "10px",
                }}
              >
                Demo
              </Button>
              <Button
                variant="outlined"
                style={{
                  color: "teal",
                  borderColor: "teal",
                  marginTop: "10px",
                  borderRadius: "10px",
                }}
              >
                Source Code
              </Button>
            </div>
          </div>
          <div style={{ boxShadow: "0 0 8px teal" }}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: "35vw" }}
                image={pokemon}
                alt="Pokemon Flatiron"
              />
            </Card>
          </div>
        </div>
        <div
          // data-aos-easing="linear"
          // data-aos-duration="500"
          // data-aos="zoom-in-left"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "50px",
            marginLeft: "50px",
            marginBottom: "50px",
          }}
        >
          <div style={{ boxShadow: "0 0 8px teal" }}>
            <Card
              sx={{
                display: "flex",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "35vw" }}
                image={portfolio}
                alt="Portfolio"
              />
            </Card>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <h1
              style={{ fontSize: "32px", fontWeight: "800", color: "#dadada" }}
            >
              Personal Portfolio
            </h1>
            <p
              style={{ maxWidth: "400px", fontWeight: "600", color: "#a9a9a9" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div style={{ display: "flex" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="React"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                alt="HTML"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                alt="CSS"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <Button
              variant="outlined"
              style={{
                color: "teal",
                borderColor: "teal",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            >
              Demo
            </Button>
            <Button
              variant="outlined"
              style={{
                color: "teal",
                borderColor: "teal",
                marginLeft: "20px",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            >
              Source Code
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <a className="projectsAnchor" id="projects"></a>
      <div className="mobileProjects">
        <div
          style={{
            marginTop: "200px",
          }}
        >
          <h2 style={{ fontSize: "32px", color: "#dadada", fontWeight: "800" }}>
            <span
              style={{
                color: "teal",
                fontSize: "24px",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              02.
            </span>
            Projects
          </h2>
        </div>
        <div
          // data-aos-easing="linear"
          // data-aos-duration="500"
          // data-aos="zoom-in-left"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "row",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100vw",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#dadada",
                marginBottom: "2vh",
              }}
            >
              Parts Undefined
            </h1>
            <div style={{ boxShadow: "0 0 8px teal" }}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "80vw" }}
                  image="https://i.imgur.com/M33hXMW.jpg"
                  alt="Parts Undefined"
                />
              </Card>
            </div>
            <div style={{ marginTop: "2vh" }}>
              <p
                style={{
                  maxWidth: "400px",
                  fontWeight: "600",
                  color: "#a9a9a9",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="JavaScript"
                  style={{
                    height: "30px",
                    width: "30px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    marginRight: "10px",
                    borderRadius: "5px",
                  }}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="React"
                  style={{
                    height: "30px",
                    maxWidth: "50px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                />
                <img
                  src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png"
                  alt="Rails"
                  style={{
                    height: "30px",
                    width: "30px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                />
                <img
                  src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png"
                  alt="SQL"
                  style={{
                    height: "30px",
                    width: "30px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                />
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/bootstrap-7-1175254.png"
                  alt="Bootstrap"
                  style={{
                    height: "30px",
                    width: "30px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div>
                <a href="https://pu.vergeyle.net/" target="_blank">
                  <Button
                    variant="outlined"
                    style={{
                      color: "teal",
                      borderColor: "teal",
                      marginTop: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/Vantero9973/parts-unknown"
                  target="_blank"
                >
                  <Button
                    variant="outlined"
                    style={{
                      color: "teal",
                      borderColor: "teal",
                      marginLeft: "20px",
                      marginTop: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    Source Code
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "800",
              color: "#dadada",
              marginBottom: "2vh",
            }}
          >
            Pokémon Flatiron
          </h1>
          <div style={{ boxShadow: "0 0 8px teal" }}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: "80vw" }}
                image={pokemon}
                alt="Pokemon Flatiron"
              />
            </Card>
          </div>
          <div style={{ marginTop: "2vh" }}>
            <p
              style={{
                maxWidth: "400px",
                fontWeight: "600",
                color: "#a9a9a9",
                textAlign: "right",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
                style={{
                  height: "30px",
                  width: "30px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="React"
                style={{
                  height: "30px",
                  maxWidth: "50px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
                alt="Tailwind"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <a href="https://vantero.dev" target="_blank">
                <Button
                  variant="outlined"
                  style={{
                    color: "teal",
                    borderColor: "teal",
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Demo
                </Button>
              </a>
              <a
                href="https://github.com/Vantero9973/portfolio"
                target="_blank"
              >
                <Button
                  variant="outlined"
                  style={{
                    color: "teal",
                    borderColor: "teal",
                    marginLeft: "20px",
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Source Code
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "800",
              color: "#dadada",
              marginBottom: "2vh",
            }}
          >
            Portfolio
          </h1>
          <div style={{ boxShadow: "0 0 8px teal" }}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: "80vw" }}
                image={portfolio}
                alt="Portfolio"
              />
            </Card>
          </div>
          <div style={{ marginTop: "2vh" }}>
            <p
              style={{ maxWidth: "400px", fontWeight: "600", color: "#a9a9a9" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div style={{ display: "flex" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
                style={{
                  height: "30px",
                  width: "30px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="React"
                style={{
                  height: "30px",
                  maxWidth: "50px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
              <img
                src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
                alt="Tailwind"
                style={{
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div>
              <a href="https://vantero.dev" target="_blank">
                <Button
                  variant="outlined"
                  style={{
                    color: "teal",
                    borderColor: "teal",
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Demo
                </Button>
              </a>
              <a
                href="https://github.com/Vantero9973/portfolio"
                target="_blank"
              >
                <Button
                  variant="outlined"
                  style={{
                    color: "teal",
                    borderColor: "teal",
                    marginLeft: "20px",
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Source Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
