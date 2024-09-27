import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--teal-accent); /* Teal color for "My Projects" heading */
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2C3E50; /* Muted charcoal color */
      border-radius: 1.2rem;
      color: #ffffff; /* White text */
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      border: 2px solid transparent;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow without hover */

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 20px 12px var(--teal-accent); /* Stronger teal glow */
        background-color: #0b0c10; /* Darker on hover */
        color: #66fcf1; /* Teal text on hover */
        border: 2px solid var(--teal-accent); /* Teal border on hover */
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: inherit;
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;

          a > img {
            width: 5.0rem;
            transition: transform 0.3s ease, filter 0.3s ease; /* Smooth transition */
          }

          a > img:hover {
            transform: scale(1.1); /* Slight enlarge on hover */
            filter: brightness(1.2); /* Increase brightness */
          }
        }
      }

      h3 {
        margin-bottom: 2rem;
        color: inherit;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        color: inherit;

        a {
          color: inherit;
          border-bottom: 1px solid inherit;
          transition: color 0.25s;

          &:hover {
            color: #66fcf1; /* Teal for link hover effect */
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          color: inherit;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
