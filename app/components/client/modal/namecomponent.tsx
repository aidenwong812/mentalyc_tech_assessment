import { name1Atom, name2Atom } from "@/app/atoms";
import { useAtom } from "jotai";

const NameComponent = ({ isIndividual }: { isIndividual: boolean }) => {
    const [, setName1] = useAtom(name1Atom);
    const [, setName2] = useAtom(name2Atom);
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
                <p className="text-[12px]">{isIndividual ? "Name " : "Name 1 "}</p>
                <p className="text-[#F3404F]">*</p>
            </div>
            <input
                type="text"
                placeholder={isIndividual ? "Input Name" : "Input Name 1"}
                className="border-2 border-gray-200 w-full p-2 rounded-md text-[14px]"
                onChange={(e) => {setName1(e.target.value)}}
            />
            {!isIndividual &&
                <div className="flex gap-1">
                    <p className="text-[12px]">{isIndividual ? "Name " : "Name 2 "}</p>
                    <p className="text-[#F3404F]">*</p>
                </div>
            }
            {!isIndividual &&
                <input
                    type="text"
                    placeholder={isIndividual ? "Input Name" : "Input Name 2"}
                    className="border-2 border-gray-200 w-full p-2 rounded-md text-[14px]"
                    onChange={(e) => {setName2(e.target.value)}}
                />
            }
        </div>
    )
}
export default NameComponent;