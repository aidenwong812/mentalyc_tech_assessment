import { pronounAtom } from "@/app/atoms";
import { useAtom } from "jotai";
import RadioButton from "../radioButton";

const Pronouns = () => {
    const pronouns = [
        "He/Him", "She/Her", "They/Them"
    ]
    const [pronoun, setPronoun] = useAtom(pronounAtom);
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
                <p className="text-[12px]">Pronouns</p>
                <p className="text-[#F3404F]">*</p>
            </div>
            <div className="flex justify-between">
                {
                    pronouns.map(item => (
                        <div key={item} className="flex items-center gap-2 cursor-pointer" onClick={() => {setPronoun(item)}}>
                            <RadioButton isSelected={pronoun === item} />
                            <p className="text-[14px]">{item}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Pronouns;