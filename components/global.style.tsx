import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --colors-primary: rgba(55, 135, 96, 1);
        --colors-dark-1: rgba(40, 41, 61, 1);
        --colors-dark-2: rgba(85, 87, 112, 1);
        --colors-dark-4: rgba(199, 201, 217, 1);
        --colors-light-2: rgba(242, 242, 245, 1);
        --colors-light-3: rgba(250, 250, 252, 1);
        --colors-light-4: rgba(255, 255, 255, 1);
    }

    * {
        font-family: "Poppins", sans-serif;
    }

    body {
        background: url(/background.png);
        margin: 0;
        padding: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;

export default GlobalStyles;
