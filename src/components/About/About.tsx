import { Container } from "./styles";
import Amirita2 from "../../assets/about_uncropped.jpg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import JavaIcon from "../../assets/java.png";
import PythonIcon from "../../assets/python.png";
import CsharpIcon from "../../assets/c-sharp.png";
import Cicon from "../../assets/letter-c.png";
import UnityIcon from "../../assets/unity.png";
import PostgreSQLIcon from "../../assets/icons8-postgresql-48.png";
import SQLIcon from "../../assets/icons8-sql-64.png";
import FigmaIcon from "../../assets/figma-svgrepo-com.svg";
import OracleIcon from "../../assets/icons8-oracle-48.png";
import PowershellIcon from "../../assets/powershell.png";
import DevOpsIcon from "../../assets/devops.png";

export function About() {
  return (
    <Container id="about">
      <div className="glowing-box">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>About me</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <p>
              Hi! My name is Amirita and I am a student at the Georgia Institute
              of Technology graduating this upcoming December with a BSc in
              Computer Science. My concentrations are in artificial intelligence
              and human-computer interaction and I am currently pursuing
              full-time software engineering and development roles. My strengths
              lie specifically in backend development and machine learning.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={0.2 * 1000}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <p>
              I have extensive experience with several programming languages,
              including Java, Python, and C#. I am also proficient in
              JavaScript, TypeScript, CSS, and HTML. Through my internship and
              project work, I have gained experience with database management
              systems such as Oracle, PostgreSQL, and SQL. Additionally, I have
              developed a solid understanding of cloud-based data storage and
              retrieval through platforms like MongoDB.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
            <p>
              As I approach graduation, I’ve been actively pursuing several
              passion projects during my final semester as an undergraduate. As
              a researcher in the Robotics Musicianship Lab, I’m working with
              computer vision cameras and managing MIDI data transfer to Digital
              Audio Workstations (DAWs). I’ve also joined Georgia Tech's web
              development club, where I’m currently developing a Dorm Roommate
              Matching Project that leverages machine learning techniques to
              optimize roommate matches. I’m excited to continue pursuing these
              projects as I transition into the industry and find my niche.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
            <h3>Here are my main skills:</h3>
          </ScrollAnimation>
          <div className="hard-skills">
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={JavaIcon} alt="Java" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={PythonIcon} alt="Python" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={Cicon} alt="C" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={CsharpIcon} alt="C#" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={SQLIcon} alt="SQL" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={OracleIcon} alt="Oracle" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={PostgreSQLIcon} alt="PostgreSQL" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={UnityIcon} alt="Unity" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={PowershellIcon} alt="Powershell" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={DevOpsIcon} alt="DevOps" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={FigmaIcon} alt="Figma" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={reactIcon} alt="React" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
                <img src={typescriptIcon} alt="Typescript" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={boostrapIcon} alt="bootstrap" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={jsIcon} alt="JavaScript" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img
            src={Amirita2}
            alt="Amirita Manickandan"
            style={{ width: "375px", height: "auto", borderRadius: "10%" }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
