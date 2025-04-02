import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Primary colors (used for main UI elements) */
    --primary: #C03A28;       /* Vintage red - traditional filmmaking */
    --primary-dark: #A32A18;  /* Darker red for hover states */
    
    /* Secondary colors */
    --secondary: #2596BE;     /* Tech blue - AI innovation */
    --secondary-dark: #1A7A9F; /* Darker blue for hover states */
    
    /* Bridge colors */
    --hybrid: #8D99AE;        /* Neutral gray that bridges both worlds */
    --accent: #F2D6A2;        /* Warm beige from Sarah image */
    
    /* Functional colors */
    --text: #333333;          /* Dark gray for readability */
    --text-light: #666666;    /* Medium gray for secondary text */
    --background: #FAF1E4;    /* Light neutral background */
    --background-alt: #F5EBD8; /* Slightly darker background for cards */
    --border: #E0D5C0;        /* Subtle border color */
    --shadow: rgba(0, 0, 0, 0.1); /* Shadow with low opacity */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text);
    background-color: var(--background);
    line-height: 1.6;
    position: relative;
  }
  
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/textures/film-grain.png');
    opacity: 0.03;
    pointer-events: none;
    z-index: -1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary-dark);
    }
  }

  button {
    cursor: pointer;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  section {
    padding: 5rem 0;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--primary-dark);
    }
  }

  .btn-secondary {
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);

    &:hover {
      background-color: var(--primary);
      color: white;
    }
  }
`;

export default GlobalStyle;