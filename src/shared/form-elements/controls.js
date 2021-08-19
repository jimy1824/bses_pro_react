import CustomTextFeild from "./textfield";
import CustomButton from "./button";
import Select from "./select";
import CustomCheckbox from "./checkbox";
import SelectSideLabel from "./select-with-side-label";
import TextFieldSide from "./textfield-with-side";
import DatePicker from "./date-picker";
import RadioButtonSide from "./radio-button-side-label";
const Controls = {
    TextField: CustomTextFeild,
    Button: CustomButton,
    Select,
    CheckBox: CustomCheckbox,
    SideSelect: SelectSideLabel,
    SideTextField: TextFieldSide,
    DatePicker: DatePicker,
    SideRadioButton: RadioButtonSide
};
export default Controls;
