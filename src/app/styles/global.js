import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    font-family: "Open Sans", sans-serif;
    line-height: 1.6;
    color: #777;
  }

  button {
    cursor: pointer;
  }
`;
