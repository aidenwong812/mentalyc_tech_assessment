import { birthyearAtom } from "@/app/atoms";
import { useAtom } from "jotai";

const BirthInput = () => {
    const [, setBirth] = useAtom(birthyearAtom);
    return (
        <div className="flex flex-col gap-2">
            <p className="text-[12px]">
                Year of birth
            </p>
            <input
                type="text"
                placeholder="Input your year of birth"
                className="border-2 border-gray-200 w-full p-2 rounded-md text-[14px]"
                onChange={(e) => {setBirth(e.target.value)}}
            />
        </div>
    )
}
export default BirthInput;