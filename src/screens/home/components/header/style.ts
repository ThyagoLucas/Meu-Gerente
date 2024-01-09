import styled from "styled-components";

export const HeaderHomeContainer = styled.header`
    background-color: #D9D9D9;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 5%;

     @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
        position: static;
        min-width: 100%;
    }

`