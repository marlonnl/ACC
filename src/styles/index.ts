import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

// fonts:
// 'Geo', sans-serif
// 'Roboto', serif
// 'Fira Code', monospace

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
    list-style-type: none;
  }

  body {
    background-color: ${colors.bgSeconday};
  }

  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
`
