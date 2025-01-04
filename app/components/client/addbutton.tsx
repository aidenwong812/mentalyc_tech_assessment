import { useAtom } from "jotai";
import { isShowModalAtom } from "@/app/atoms";

const AddButton = () => {
    const [, setIsShowModal] = useAtom(isShowModalAtom);
    return (
        <button className="px-[31px] py-2 border-[1px] border-[#731054] text-[#731054] rounded-[4px] flex" onClick={() => setIsShowModal(true)}>
            + Add 
            <p className="sm:flex hidden">&nbsp; new Client</p>
        </button>
    )
}
export default AddButton;