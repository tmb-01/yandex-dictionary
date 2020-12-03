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
@media only screen and (max-width: 1200px){
width: 80%;
}
`;

export const Logo = styled.p`
font-size: 60px;
//color: var(--black);
color: var(--white);
font-weight: lighter;
padding: 30px 0;
text-align: center;
&:first-letter{
color: var(--red);
} 
span{
font-weight: bold;
background-color: var(--white);
color: var(--black);
padding: 0 20px;
}

@media only screen and (max-width: 942px){
font-size: 50px;
padding: 25px 0;
}
@media only screen and (max-width: 768px){
font-size: 40px;
padding: 20px 0;
}
@media only screen and (max-width: 425px){
font-size: 30px;
padding: 10px 0;
}
`;