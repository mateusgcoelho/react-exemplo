import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;

        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        height: 100vh;

        color: #f1f1f1;
        background: #020202;
    }

    textarea, input, button {
        font-family: Arial, Helvetica, sans-serif;
    }

    a {
        color: #f1f1f1;
        text-decoration: none;
    }
`;