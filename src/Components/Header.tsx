import styled from "styled-components";

const StyledHeader =styled.header`
    padding: 2%;
    text-align: left;
    background-color: brown;
    color: white;
    
    @media screen and (max-width: 750px){
        padding: 2%;
        text-align: center;
    }
`
export default function Header(){
    return(
            <StyledHeader>
                <h1>Arhaan Gulati</h1>
                <p> My Online Resume</p>
            </StyledHeader>
    );
}








