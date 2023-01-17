import Button from "@mui/material/Button";
import { Typewriter } from "react-simple-typewriter";

export default function Bio() {
  return (
    <div className="bio" id="bio">
      <p
        style={{
          fontSize: "clamp(10px, 4vw, 15px)",
          fontWeight: "800",
          fontFamily: "'Fira Code', monospace",
          color: "teal",
        }}
      >
        Hi, my name is
      </p>
      <h1
        style={{
          fontSize: "clamp(40px, 4vw, 80px)",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "800",
          color: "#dadada",
        }}
      >
        Alex Van Vleet.
      </h1>
      <h1
        style={{
          fontSize: "clamp(25px, 4vw, 80px)",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "800",
          color: "darkGray",
        }}
      >
        I am a
        <Typewriter
          style={{ fontSize: "clamp(25px, 4vw, 80px)" }}
          words={[
            " software engineer.",
            " web developer.",
            " designer.",
            " traveler.",
          ]}
          loop={50}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p
        style={{
          fontSize: "clamp(16px, 3vw, 20px",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "400",
          color: "darkGray",
          maxWidth: "500px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#contact">
        <Button
          variant="outlined"
          style={{
            height: "auto",
            width: "auto",
            marginTop: "20px",
            color: "teal",
            borderColor: "teal",
            fontSize: "clamp(10px, 3vw, 20px)",
            fontFamily: "'Fira Code', monospace",
            fontWeight: "800",
            border: "2px solid",
            borderRadius: "10px",
          }}
        >
          Contact Me!
        </Button>
      </a>
    </div>
  );
}
