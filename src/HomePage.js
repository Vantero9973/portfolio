import NavBar from "./NavBar";
import Links from "./Links";
import Bio from "./Bio";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

export default function HomePage() {
  return (
    <>
      <Links />
      <div style={{ padding: "0 10%" }}>
        <Bio />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
