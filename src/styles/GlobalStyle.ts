import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --secondary: #3b82f6;
    --accent: #a855f7;
    --text: #333333;
    --text-light: #666666;
    --background: #ffffff;
    --background-alt: #f9fafb;
    --border: #e5e7eb;
    --shadow: rgba(0, 0, 0, 0.1);
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