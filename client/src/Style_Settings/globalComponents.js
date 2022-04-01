import styled from "styled-components";

export const Button = styled.button` 
    background-color: ${({ theme }) => theme.colors.secondColor};
    border: none;
    outline: none !important;
    border-radius: 5px;
    padding: 5px 15px 8px 15px;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondTextColor};
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    line-height: 20px;
    cursor: pointer;
    letter-spacing: 0.02em;
    position: relative !important;
    &:before
    {
        content: "";
        width: 0;
        display: block;
        height: 0;
        pointer-events: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255,255,255, 0.15);
        border-radius: 50%;
        transition: 0.4s;
    }
    &:hover:before
    {
        width: 90px;
        height: 90px;
    }
`

export const Container = styled.div` 
    padding: 0px 40px;
    width: 100%;
    @media(max-width: 900px)
    {
        padding: 0px 25px;
    }
    @media(max-width: 525px)
    {
        padding: 0px 15px;
    }
    @media(max-width: 430px)
    {
        padding: 0px 10px;
    }
`