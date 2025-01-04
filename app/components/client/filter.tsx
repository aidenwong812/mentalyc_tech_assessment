import { clientNameAtom, clinicianNameAtom } from "@/app/atoms";
import { useAtom } from "jotai";

const FilterComponent = () => {
    const [, setClientName] = useAtom(clientNameAtom);
    const [, setClincianName] = useAtom(clinicianNameAtom);
    return (
        <div className="flex gap-2 w-full flex-1">
            <div className="w-full flex-1 gap-2">
                <p className="text-black text-[12px]">Client name</p>
                <input
                    type="text"
                    className="border-2 border-gray-200 w-full p-2 rounded-md text-[14px] text-black"
                    onChange={(e) => { setClientName(e.target.value) }}
                />
            </div>
            <div className="w-full flex-1 gap-2">
                <p className="text-black text-[12px]">Clinician name</p>
                <input
                    type="text"
                    className="border-2 border-gray-200 w-full p-2 rounded-md text-[14px] text-black"
                    onChange={(e) => { setClincianName(e.target.value) }}
                />
            </div>
        </div>
    )
}
export default FilterComponent;