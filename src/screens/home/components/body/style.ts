import styled from "styled-components";

export const BodyHomeConatiner = styled.main`
    width: 100vw;
    height: 95%;
    @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
        max-width:80% ;
    }
`