import { IoMdRadioButtonOn } from "react-icons/io";
import { IoMdRadioButtonOff } from "react-icons/io";
const RadioButton = ({ isSelected }: { isSelected: boolean }) => {
    return (
        isSelected?<IoMdRadioButtonOn className="size-5 text-[#731054] p-[1.75px]"/>
        :<IoMdRadioButtonOff className="text-[#8F8F8F]  p-[1.75px] size-5"/>
    )
}
export default RadioButton;