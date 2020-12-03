import styled from "styled-components"

export const Container = styled.div`
width: 1140px;
margin: auto;
padding: 50px 0;
display:flex;
justify-content: center;
flex-wrap: wrap;
@media only screen and (max-width: 1200px){
width: 90%;
}

@media only screen and (max-width: 942px){
padding: 35px 0;
width: 95%;
}

@media only screen and (max-width: 425px){
width: 100%;
padding: 20px 0;
}

`;

export const Col=styled.div`
width: 50%;
padding: 0 20px;

@media only screen and (max-width:768px){
width: 100%;
}
`;