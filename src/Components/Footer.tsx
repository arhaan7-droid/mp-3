import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    padding: 2%;
    background-color: brown;
    color: white;
`;

export default function Footer(){
    return (
        <StyledFooter>
            <p> All Rights Reserved by Arhaan Gulati <Link to ="/credits"> Credits </Link> &#169; </p>
        </StyledFooter>
    );
}




