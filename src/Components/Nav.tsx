import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  height: 120vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #e4d5c3;

  ul {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    width: 80%;
    margin: 10% auto;
    text-align: center;
    border: mintcream 8px solid;
    background-color: mintcream;
  }

  a {
    color: black;
    font-size: calc(2px + 1.8vw);
    text-decoration: none;
  }

  @media screen and (max-width: 750px) {
    height: 10%;
    width: 100%;

    ul {
      flex-direction: row;
      justify-content: center;
    }

    li {
      margin: 1%;
      width: 15%;
    }

    a {
      font-size: calc(2px + 1.5vw);
    }
  }
`;

export default function Nav() {
    return(
            <StyledNav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/education">Education</Link>
                        </li>
                        <li>
                            <Link to="/experiences">Experiences</Link>
                        </li>
                        <li>
                            <Link to="/references">References</Link>
                        </li>
                        <li>
                            <Link to="/certifications">Certifications</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
            </StyledNav>
    )
}

