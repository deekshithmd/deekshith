import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Nunito", sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
        outline: none;
        border: none;
        text-transform: capitalize;
        transition: all .2s linear;
    };
    *::selection{
        background:${({ theme }) => theme.default.selection};
        color:#333;
    };
    html{
        font-size:62.5%;
        overflow-x:hidden;
    };
    html::-webkit-scrollbar{
        width:1.4rem;
    };
    html::-webkit-scrollbar-track{
        background:#222;
    };
    html::-webkit-scrollbar-thumb{
        background:${({ theme }) => theme.default.selection};
    };
`;
