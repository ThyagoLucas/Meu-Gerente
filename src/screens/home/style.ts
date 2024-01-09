import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #fff;

    @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
        position: absolute;
        top: 0;
        flex-direction: row;
        flex-wrap: wrap;
        
    }
`