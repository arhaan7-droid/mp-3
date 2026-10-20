import {useState} from "react";

// Custom Hook: one calculate function replaces the 5 repetitive functions from MP-1
export default function useCalc(){
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [output, setOutput] = useState("");

    function calculate(operator: string){
        const a = Number(num1);
        const b = Number(num2);
        let result = 0;

        if (operator === "+") {
            result = a + b;
        } else if (operator === "-") {
            result = a - b;
        } else if (operator === "x") {
            result = a * b;
        } else if (operator === "÷") {
            result = a / b;
        } else if (operator === "^") {
            result = 1;
            for (let i = b; i > 0; i--) {
                result = result * a;
            }
            for (let i = b; i < 0; i++) {
                result = result / a;
            }
        }

        setOutput(String(result));
    }

    function clear(){
        setNum1("");
        setNum2("");
        setOutput("");
    }

    return {num1, setNum1, num2, setNum2, output, calculate, clear};
}