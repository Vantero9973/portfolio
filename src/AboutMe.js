import photo from "./photo.png";

export default function AboutMe() {
  return (
    <>
      <a className="aboutAnchor" id="about"></a>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "300px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50vw",
            color: "#a9a9a9",
            fontSize: "20px",
            maxWidth: "500px",
          }}
        >
          <div>
            <h2
              style={{ fontSize: "32px", color: "#dadada", fontWeight: "800" }}
            >
              <span
                style={{
                  color: "teal",
                  fontSize: "24px",
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                01.
              </span>
              About
            </h2>
            <p style={{ margin: "10px", fontSize: "clamp(16px, 2.5vw, 20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ margin: "10px", fontSize: "clamp(16px, 2.5vw, 20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ margin: "10px", fontSize: "clamp(16px, 2.5vw, 20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div>
          <img
            style={{
              height: "294px",
              width: "353px",
              objectFit: "cover",
              border: "2px solid",
              backgroundColor: "#1C1C1E",
              borderRadius: "100px",
              borderColor: "teal",
            }}
            src={photo}
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "50px",
          color: "#dadada",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        <h2>Here are a few technologies I've been working with recently...</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ color: "#dadada" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
            alt="JavaScript"
            style={{
              height: "60px",
              width: "60px",
              margin: "20px",
              borderRadius: "15px",
            }}
          />
          <label style={{ display: "flex", justifyContent: "center" }}>
            JavaScript
          </label>
        </div>
        <div style={{ color: "#dadada" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="React"
            style={{
              height: "60px",
              width: "60px",
              margin: "20px",
              borderRadius: "15px",
            }}
          />
          <label style={{ display: "flex", justifyContent: "center" }}>
            React
          </label>
        </div>
        <div style={{ color: "#dadada" }}>
          <img
            src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
            alt="Tailwind"
            style={{
              height: "60px",
              width: "60px",
              margin: "20px",
              borderRadius: "15px",
            }}
          />
          <label style={{ display: "flex", justifyContent: "center" }}>
            Tailwind
          </label>
        </div>
        <div style={{ color: "#dadada" }}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
            alt="HTML"
            style={{
              height: "60px",
              width: "60px",
              margin: "20px",
              borderRadius: "15px",
            }}
          />
          <label style={{ display: "flex", justifyContent: "center" }}>
            HTML
          </label>
        </div>
        <div style={{ color: "#dadada" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
            alt="CSS"
            style={{
              height: "60px",
              width: "60px",
              margin: "20px",
              borderRadius: "15px",
            }}
          />
          <label style={{ display: "flex", justifyContent: "center" }}>
            CSS
          </label>
        </div>
        <div style={{ color: "#dadada" }}>
          <img
            src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png"
            alt="Ruby on Rails"
            style={{
              height: "60px",
              width: "60px",
              margin: "20px",
              borderRadius: "15px",
            }}
          />
          <label style={{ display: "flex", justifyContent: "center" }}>
            Rails
          </label>
        </div>
        <div style={{ color: "#dadada" }}>
          <img
            src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png"
            alt="SQL"
            style={{
              height: "60px",
              width: "60px",
              margin: "20px",
              borderRadius: "15px",
            }}
          />
          <label style={{ display: "flex", justifyContent: "center" }}>
            SQL
          </label>
        </div>
        <div style={{ color: "#dadada" }}>
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt="Git"
            style={{
              height: "60px",
              width: "60px",
              margin: "20px",
              borderRadius: "15px",
            }}
          />
          <label style={{ display: "flex", justifyContent: "center" }}>
            Git
          </label>
        </div>
        <div style={{ color: "#dadada" }}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="Github"
            style={{
              height: "60px",
              width: "60px",
              margin: "20px",
              borderRadius: "15px",
            }}
          />
          <label style={{ display: "flex", justifyContent: "center" }}>
            Github
          </label>
        </div>
      </div>
    </>
  );
}
