import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33CC95;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        /* a cada 1rem será considera 10px */
        font-size: 62.5%;

        @media (max-width: 1080px) {
            font-size: 40%;
        }

        @media (max-width: 720PX) {
            font-size: 30%;
        }

    }

    body {
        background: var(--background);
        font-size: 1.6rem
    }

    body, button, input, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }


    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
