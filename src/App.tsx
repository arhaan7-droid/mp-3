import styled from "styled-components";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Components/Root.tsx";


const StyledApp=styled.div`
    width:90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 750px) {
        display:flex;
        flex-direction: column;
    }
`;

const router=createBrowserRouter(
    [{path:"*", Component: Root},]
);

export default function App() {
    return (
        <StyledApp>
            <RouterProvider router={router}/>
        </StyledApp>
    );
}







