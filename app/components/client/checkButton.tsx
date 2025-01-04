import { BsCheckSquareFill } from "react-icons/bs";
const CheckButton = ({ isChecked }: { isChecked: boolean }) => {
    return (
        <>
            {isChecked ?
                <BsCheckSquareFill className="text-[#731054] size-4 rounded-sm"/>
                :
                <div className="border-[1px] border-[#731054] size-4 rounded-sm"/>
        }
        </>
    )
}
export default CheckButton;