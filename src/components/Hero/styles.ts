import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 4rem; /* Reduced gap to bring the image closer to text */
  background: rgba(0, 0, 0, 0);

  .glowing-box {
    padding: 2rem; /* Add padding inside the box */
    padding-right: 5rem; /* Extend box further to the right */
    border-radius: 10px; /* Make the corners rounded */
    box-shadow: 0 0 30px 10px var(--teal-accent); /* Glowing effect */
    transition: box-shadow 0.3s ease, padding-right 0.3s ease; /* Smooth transition for glow and padding */

    &:hover {
      box-shadow: 0 0 45px 15px var(--teal-accent); /* Intensify glow on hover */
      padding-right: 6rem; /* Extend even further on hover */
    }
  }

  .hero-text {
    & > p {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image {
    img {
      max-width: 800px;

      /* Move image to the left and up */
      transform: translateX(-50px) translateY(-50px); /* Adjust the Y value to move the image up */
      
      filter: drop-shadow(0 0 15px var(--teal-accent)); /* Apply glow around the image */
      transition: filter 0.3s ease, transform 0.3s ease; /* Smooth transition for glow and position */

      &:hover {
        filter: drop-shadow(0 0 25px var(--teal-accent)); /* Intensify glow on hover */
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;

    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 35%;
  }

  @media (max-width: 480px) {
    margin-top: 45%;
  }
`;
