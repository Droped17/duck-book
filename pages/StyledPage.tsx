import { NextPage } from "next";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle 
`body {
    background-color: #ebebeb;
    min-height: 100vh;
    padding: 0.5rem;
    margin-top: 0;
    font-family: Verdata;
}
`;

const StyledPage : NextPage = () => {
    return (
        <>
        <GlobalStyle />
        <div>This page will be styled with global</div>
        </>
    );
};

export default StyledPage;