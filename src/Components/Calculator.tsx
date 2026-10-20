import styled from "styled-components";
import useCalc from "../hooks/useCalc.ts";

const StyledCalculator = styled.div`
    width: 70%;
    margin: 1% auto 2% auto;
    padding: 12% 5%;
    border: 4px solid brown;
    background-color: white;
    
    label {
        margin: 0;
    }
    
    input {
    display: block;
    width: 60%;
    margin: 2% auto;
    }

    button {
    margin: 3% 1% 0 1%;
    }

    @media screen and (max-width: 750px) {
        width: 90%;
        padding: 2% 5%;

        button {
            padding: 3%;
        }
    }    
`;

export default function Calculator(){
    const {num1, setNum1, num2, setNum2, output, calculate, clear} = useCalc();

    return(
        <>
            <h2>JS Calculator</h2>
            <StyledCalculator>
                <input id="num1" value={num1} onChange={(e) => setNum1(e.target.value)}/>
                <input id="num2" value={num2} onChange={(e) => setNum2(e.target.value)}/>
                <button onClick={() => calculate("+")}> + </button>
                <button onClick={() => calculate("-")}> - </button>
                <button onClick={() => calculate("x")}> x </button>
                <button onClick={() => calculate("÷")}> ÷ </button>
                <button onClick={() => calculate("^")}> ^ </button>
                <button onClick={clear}> Clear </button>
            </StyledCalculator>
            <h2 style={{color: Number(output) < 0 ? "red" : "black"}}>{output}</h2>
        </>
    );
}



