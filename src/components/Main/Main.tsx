import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 4, // Slightly larger on hover
              },
              connect: {
                distance: 80,
                radius: 60,
              },
              grab: {
                distance: 400,
              },
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#66FCF1", // Your accent teal color
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              speed: 1, // Slow down particle movement
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50, // Increase the number of particles
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              value: 0.8, // Higher opacity for glowing effect
            },
            shape: {
              type: "circle", // Circle shape
            },
            size: {
              random: true,
              value: 2, // Smaller particles for spark effect
            },
            shadow: {
              enable: true,
              blur: 5, // Blur effect to create a glow
              color: "#66FCF1", // Glow color matching the teal accent
            },
          },
          background: {
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <Hero />
      <About />
      <Project />
      <Contact />
    </Container>
  );
}
