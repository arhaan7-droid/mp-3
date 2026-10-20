import styled from "styled-components";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Main from "./Main.tsx";
import Footer from "./Footer.tsx";


const NavMainContainer = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    
    @media screen and (max-width: 750px){
        flex-direction: column;
        flex: 1;
    }
`

export default function Root(){
    return(
        <>
            <Header/>
            <NavMainContainer>
                <Nav/>
                <Main/>
            </NavMainContainer>
            <Footer/>
        </>
    );
}