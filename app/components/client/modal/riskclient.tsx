import { isRiskedAtom } from "@/app/atoms";
import { useAtom } from "jotai";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
const RiskClient = () => {
    const [isRisked, setIsRisked] = useAtom(isRiskedAtom);
    return (
        <div className="flex justify-between w-full items-center">
            <p className="text-[14px]">
                High risk client
            </p>
            <div className="cursor-pointer duration-200" onClick={() => setIsRisked(!isRisked)}>
                {!isRisked ? <BsToggleOn className="text-[#707070] w-10 h-6 rotate-180" /> : <BsToggleOff className="text-[#707070] w-10 h-6 rotate-180" />}
            </div>
        </div>
    )
}
export default RiskClient;