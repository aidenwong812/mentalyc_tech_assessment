import { useAtom } from "jotai";
import { isShowModalAtom } from "@/app/atoms";

const AddButton = () => {
    const [, setIsShowModal] = useAtom(isShowModalAtom);
    return (
        <button className="px-[31px] py-2 border-[1px] border-[#731054] text-[#731054] rounded-[4px]" onClick={() => setIsShowModal(true)}>
            + Add new Client
        </button>
    )
}
export default AddButton;