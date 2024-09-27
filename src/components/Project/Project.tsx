import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ipatPresentaiton from "../../assets/IPaT Final Presentation.pdf";
import landisPresentation from "../../assets/Amirita Manickandan - Internship Presentation.pdf";
import MLProposal from "../../assets/Project Proposal (2).pdf";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AmiritaM/IPaT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href={ipatPresentaiton} target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="External Link" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Aircraft Maintenance Augmented Reality App</h3>
              <p>
                At the Institute of People and Technology, I designed and
                developed an aircraft maintenance app for a major manufacturing
                client, deployed on the Magic Leap 2 augmented reality headset.
                The app enhanced user interaction through advanced features such
                as hand-tracking, marker-tracking, and haptics, providing an
                immersive experience for technicians. I also created a
                low-fidelity demo using OpenXR, Unity3D, and C#, which
                highlighted key functionalities like HUD canvas, hole selection,
                and finger tracking. These improvements led to a 30% increase in
                user interaction efficiency, optimizing the maintenance process
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Unity3D</li>
                <li>C#</li>
                <li>Magic Leap 2 Headset</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff" /* Changed to white */
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://github.com/AmiritaM/medusai_ableton_webcam"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://www.medus.ai/"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Medusai</h3>
              <p>
                I developed a computer vision system using Python, OpenCV, and
                YOLO to track hand movements, enabling real-time interaction
                with a robotic string instrument. This system includes a feature
                where the robotic arm performs an animated gesture in response
                to string plucking, enhancing both user engagement and the
                expressive capabilities of the instrument. Additionally, I
                implemented UDP communication to transmit hand movement data,
                dynamically adjusting the pitch based on the user's hand
                position, creating an interactive and responsive musical
                experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>OpenCV</li>
                <li>YOLO</li>
                <li>Ableton</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff" /* Changed to white */
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://github.com/AmiritaM/Credit-Card-Fraud-Detection"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a href={MLProposal} target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Credit Card Fraud Detection</h3>
              <p>
                I led a credit card fraud detection initiative where I
                implemented machine learning models including Decision Tree,
                Deep Neural Networks (DNN), and Support Vector Machines (SVM).
                The project involved addressing significant imbalanced data
                challenges, which I resolved through advanced data preprocessing
                techniques and precision optimization. These efforts led to the
                successful deployment of models that achieved accuracy rates
                exceeding 95%, demonstrating strong proficiency in model
                implementation and fraud detection strategies.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Machine Learning</li>
                <li>Python</li>
                <li>Jupyter Notebook</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff" /* Changed to white */
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a href={landisPresentation} target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Database Script Migration Tool</h3>
              <p>
                At Landis+Gyr, I optimized data retrieval by 50% by migrating
                meter parameters from JSON files to a PostgreSQL database,
                supporting the deployment of over 20 million smart meters for
                TEPCO. I implemented database connection logic in Visual Studio
                using C# and object-oriented programming principles to enhance
                state management and data handling efficiency. Additionally, I
                automated the data migration from Oracle to PostgreSQL using a
                PowerShell tool, tripling the migration speed by leveraging
                PostgreSQL's COPY command, significantly reducing manual
                workload. I also actively participated in Agile sprints,
                contributing pull requests, reviewing code, and improving
                overall code quality in collaboration with my team.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>SQL</li>
                <li>Oracle</li>
                <li>PostgreSQL</li>
                <li>PowerShell</li>
                <li>C#</li>
                <li>VSCode</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff" /* Changed to white */
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://www.figma.com/proto/PU4az6MklofHA1vGRi9QYs/MixMentor-Prototype?node-id=0-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MixMentor</h3>
              <p>
                I designed Mixmentor to be a comprehensive platform to simplify
                music production for beginners by providing an intuitive,
                simulated digital audio workstation (DAW). Through interactive
                tutorials and creative challenges, I wanted to demystify complex
                DAW interfaces, helping users develop foundational music
                production skills. I prototyped the platform using Figma,
                ensuring accessibility on laptops for an optimal user
                experience. I also incorporated user feedback, integrating
                features like live learning sessions and creative templates.
                This project fosters creativity and empowers aspiring musicians
                to start producing their own compositions confidently.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Figma</li>
                <li>User Testing</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff" /* Changed to white */
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://www.figma.com/proto/Xzdm8xu0krt20xXjIgWX2H/Duolingo-Prototype?node-id=58-47&starting-point-node-id=58%3A47"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Duolingo Prototype</h3>
              <p>
                In this project, I enhanced the Duolingo user experience by
                incorporating new features such as slang accessibility, social
                sharing, music integration, and video-based learning. These
                features align with Duolingo’s standards in terms of color,
                font, and usability. Key improvements include clearer navigation
                paths, clickable buttons, interactive performance insights, and
                multimodal learning approaches to cater to various learning
                styles. Personalized learning features were refined with
                intentional color schemes and improved statistical displays,
                creating a seamless and engaging platform for language learners.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Figma</li>
                <li>User Testing</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
