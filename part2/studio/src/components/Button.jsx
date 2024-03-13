import ClickedButton from "./ClickedButton";
import SaveButton from "./SaveButton";

function Button(props) {
   return props.saveButton === true ? <SaveButton /> : <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 