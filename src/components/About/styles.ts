import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem 2rem; /* Increased padding to make the box taller */
  
  /* Glowing box-shadow around the section */
  box-shadow: 0 0 20px 10px rgba(102, 252, 241, 0.6); /* Teal glow */
  border-radius: 1.5rem; /* Smooth rounded edges */
  
  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;

    img {
      margin-top: 6rem; /* Increased margin to move the image lower */
      width: 100%; /* Full width image */
      height: auto; /* Maintain aspect ratio */
      object-fit: cover; /* Ensure it fills the container without distortion */
      border-radius: 0; /* Force square or rectangular shape */
      margin-left: 4rem; /* Move image to the right */
      transition: filter 0.5s, transform 0.5s;

      &:hover {
        filter: none; /* Remove any shadow or blur on hover */
        transform: scale(1.05); /* Slight zoom on hover */
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 6rem; /* Maintain the lower position on mobile */
      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        margin-left: 0; /* Reset margin for mobile */
        &:hover {
          filter: none; /* Ensure hover works on mobile */
        }
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      max-width: 100%;
      img {
        margin-top: 6rem; /* Maintain the lower position */
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        margin-left: 0; /* Reset margin for mobile */
        &:hover {
          filter: none;
        }
      }
    }
  }
`;
