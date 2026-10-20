import Calculator from "./Calculator.tsx"

export default function Projects() {
    return(
        <>
            <h2> Projects </h2>
            <br/>
            <b>Statistical Analysis of Military Spending and GDP Growth </b>
            <br/>
            <em> Researcher/Author </em>
            <ul>
                <li>Conducted panel data analysis on 169 countries using Stata, employing fixed effects, quadratic regression,
                    and
                    control variables to test the impact of military spending on GDP growth while addressing omitted variable
                    bias
                </li>
                <li>Delivered a comprehensive research paper with statistical outputs, regression tables, and data
                    visualizations
                </li>
            </ul>
            <b> Coding Projects - Sudoku Solver and 8 Puzzle Solver</b>
            <br/>
            <em> Programmer - Completed in Java and Python </em>
            <ul>
                <li>Developed Java and Python programs to solve Sudoku and 8-puzzle using recursive backtracking and search
                    algorithms (A*, Greedy, DFS, BFS) respectively, analyzing performance across time, space, and optimality
                </li>
            </ul>
            <b> Impact of The US Dollar On The Indian Stock Market And FIIs</b>
            <br/>
            <em> Researcher/Author </em>
            <ul>
                <li>Analyzed the impact of USD fluctuations on the Indian stock market and FIIs through regression and
                    correlation analysis, drawing from academic papers and industry reports to conclude that the US dollar acts
                    as
                    a safe haven and India’s market growth is driven by political stability and forward-looking trade policies
                </li>
            </ul>
            <br/>
            <Calculator/>
        </>
    );
}

