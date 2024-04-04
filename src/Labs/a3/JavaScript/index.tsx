import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunction from "./functions/ArrowFunction";
import ES5Functions from "./functions/ES5Functions";
import ImplicitReturn from "./functions/ImpliedReturn";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants
  from "./variables/VariablesAndConstants";
import WorkingWithArrays from "./array/WorkingWithArrays";
import ArrayIndexAndLength from "./array/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./array/AddingAndRemovingDataToFromArrays";
import ForLoops from "./array/ForLoops";
import MapFunction from "./array/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunction from "./array/FindFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperator/>
         <ES5Functions/>
         <ArrowFunction/>
         <ImplicitReturn/>
         <FunctionParenthesisAndParameters/>
         <WorkingWithArrays/>
         <ArrayIndexAndLength/>
         <AddingAndRemovingDataToFromArrays/>
         <ForLoops/>
         <MapFunction/>
         <JsonStringify/>
         <FindFunction/>
         <TemplateLiterals/>
         <House/>
         <Spreading/>
         <Destructing/>
         <FunctionDestructing/>
      </div>
   );
}

export default JavaScript