import { createGlobalStyle } from 'styled-components';
import gitHubBackground from '../assets/github-background.svg';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5 url(${gitHubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  html, body, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
