import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    *
    {
        color: ${({ theme }) => theme.colors.mainTextColor};
        font-family: Satoshi-Variable !important;
        box-sizing: border-box;
    }
    body
    {
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        overflow: hidden;
    }
    .recharts-wrapper
    {
        position: absolute;
    }
`