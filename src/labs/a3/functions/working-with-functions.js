import ES5Functions from "./es5-functions";
import ArrowFunctions from "./arrow-functions";
import ImpliedReturn from "./implied-return.";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";

function WorkingWithFunctions() {
    return(
        <div>
            <h2>Working With Functions</h2>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
        </div>
    );
}
export default WorkingWithFunctions