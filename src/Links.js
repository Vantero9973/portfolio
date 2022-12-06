import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Links() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "10vw",
        height: "100vh",
        position: "fixed",
        color: "teal",
        height: "90%",
        marginTop: "10%",
      }}
    >
      <a
        href="https://github.com/Vantero9973"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon
          style={{ height: "40px", width: "40px", margin: "0.25rem" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/alex-van-vleet/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon
          style={{ height: "40px", width: "40px", margin: "0.25rem" }}
        />
      </a>
      <a
        href="https://www.instagram.com/vantero_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon
          style={{ height: "40px", width: "40px", margin: "0.25rem" }}
        />
      </a>
      <h1
        style={{
          display: "block",
          width: "3px",
          height: "300px",
          margin: "0px auto",
          backgroundColor: "teal",
        }}
      />
    </nav>
  );
}
