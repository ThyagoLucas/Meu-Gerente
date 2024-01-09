import styled from "styled-components";

export const NavbarContainer = styled.nav`
    height: 6%;
    width: 100vw;
    background-color: #D9D9D9;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .selected{
        color: ${ (props) => props.theme.navbar.color.selected };
    }
    
    @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
        max-width:20% ;
        
    }

`