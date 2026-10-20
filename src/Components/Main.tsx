import styled from "styled-components";
import {Routes, Route} from "react-router-dom";
import Home from "./Home.tsx";
import Education from "./Education.tsx";
import Experiences from "./Experiences.tsx";
import References from "./References.tsx";
import Certifications from "./Certifications.tsx";
import Projects from "./Projects.tsx";
import Credits from "./Credits.tsx";


const StyledMain=styled.main`
    height: 120vh;
    width: 70%;
    text-align: center;
    display: flex;

    @media screen and (max-width: 750px) {
        flex: 1;
        width: 100%;
    }
`;

const AboutMe=styled.div`
    background-color: antiquewhite;
    flex: 1;

    p {
        width: 80%;
        margin: auto;
        font-size: calc(2px + 1.5vw);
        font-family: Georgia, "Times New Roman", serif;
    }

    ul {
        margin-bottom: 6%;
        list-style: none;
    }

    h3 {
        font-size: calc(3px + 1.8vw);
    }

    img {
        max-width: 80%;
    }

    table {
        width: 90%;
        margin: 0 auto 5% auto;
        font-size: calc(3px + 1.8vw);
    }

    table, th, td {
        border: 2px solid black;
    }

    .education, .certification {
        margin-bottom: 10%;
    }

    @media screen and (max-width: 750px) {
        height: 100vh;
        padding: 0 2%;

        h3 {
            font-size: calc(4px + 2vw);
        }
    }
`;

export default function Main(){
    return(
        <StyledMain>
            <AboutMe>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/experiences" element={<Experiences/>}/>
                    <Route path="/references" element={<References/>}/>
                    <Route path="/certifications" element={<Certifications/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/credits" element={<Credits/>}/>
                </Routes>
            </AboutMe>
        </StyledMain>
    );
}