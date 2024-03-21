import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants
  from "./variables/VariablesAndConstants";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";


function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <ES5Functions/>
         <ArrowFunctions/>
         <IfElse/>
         <TernaryOperator/>
      </div>
   );
}
export default JavaScript;
