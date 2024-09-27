import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-background: #0B0C10;
    --dark-content-background: #1F2833;
    --light-gray-text: #C5C6C7;
    --teal-accent: #66FCF1;
    --muted-teal: #45A29E;
    --white: #FFFFFF;
    scroll-padding-top: 10rem;
  }

  @keyframes backgroundFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--dark-background); /* Dark background */
    color: var(--white); /* White body text */
  }

  body, input, textarea, button {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--teal-accent); /* Teal headings */
  }

  a {
    text-decoration: none;
    color: var(--teal-accent); /* Links in teal */
  }

  button, .button {
    border: none;
    cursor: pointer;
    background-color: var(--teal-accent); /* Teal buttons */
    color: var(--dark-background); /* Dark text on buttons */
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover {
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  .logo {
    font-size: 3rem;
    color: var(--teal-accent); /* Teal logo */
  }

  form input, form textarea {
    border: solid 1px var(--teal-accent); /* Input borders in teal */
    color: var(--white); /* Input text in white */
    &::placeholder {
      color: var(--light-gray-text); /* Placeholder text in light gray */
    }
  }

  header.header-fixed {
    background-color: var(--dark-content-background); /* Dark background */
    a {
      color: var(--white); /* White links */
    }
  }

  footer.footer {
    background-color: var(--dark-content-background);
    color: var(--white); /* White footer text */
  }
`;
