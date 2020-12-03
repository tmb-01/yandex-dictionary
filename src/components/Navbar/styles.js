import styled from "styled-components"

export const NavbarWrapper = styled.nav`
width: 100%;
background-color: var(--red);
color: var(white);
`;

export const NavbarContainer = styled.div`
width: 1140px;
display: flex;
margin: auto;
align-items: center;
justify-content: center;
`;

export const Logo = styled.p`
font-size: 60px;
//color: var(--black);
color: var(--white);
font-weight: lighter;
padding: 30px 0;
&:first-letter{
color: var(--red);
} 
span{
font-weight: bold;
background-color: var(--white);
color: var(--black);
padding: 0 20px;
}
`;