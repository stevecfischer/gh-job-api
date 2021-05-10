import { createGlobalStyle } from 'styled-components';
import Roboto from './fonts/Roboto/Roboto-Black.ttf';
import RobotoBold from './fonts/Roboto/Roboto-Bold.ttf';
// import RobotoWoff2 from "./fonts/roboto-condensed-v19-latin-regular.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto}) format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Bold';
  src: url(${RobotoBold}) format('truetype');
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

body {
  font-family: 'Robot', sans-serif;
}
`;

export default FontStyles;
