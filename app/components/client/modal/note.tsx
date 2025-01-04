import { noteAtom } from "@/app/atoms";
import { useAtom } from "jotai";

const ExtraNotes = () => {
    const [, setNotes] = useAtom(noteAtom)
    return (
        <div className="flex flex-col gap-2">
            <p className="text-[12px]">
                Extra notes
            </p>
            <input
                type="text"
                placeholder="Extra information about your client"
                className="border-2 border-gray-200 w-full p-2 rounded-md text-[14px]"
                onChange={(e) => setNotes(e.target.value)}
            />
        </div>
    )
}
export default ExtraNotes;