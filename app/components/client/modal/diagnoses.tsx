"use client"
import { useAtom } from "jotai";
import { diagnoseAtom } from "@/app/atoms";
import DiagnosesModal from "./diagnosesModal";
const Diagnoses = ({ isShowModal, setIsShowModal }: { isShowModal: boolean, setIsShowModal: (prev: boolean) => void }) => {
    const [diagnose, setDiagnose] = useAtom(diagnoseAtom);
    return (
        <div className="flex flex-col gap-2 relative">
            <p className="text-[12px]">
                Diagnoses
            </p>
            <div className="flex border-2 border-gray-200 w-full p-2 cursor-pointer rounded-md text-[14px] items-center justify-between"
                onClick={() => { setIsShowModal(true) }}>
                <p>{diagnose}</p>
                <img src="/Client/down.svg" alt="down" className="size-4" />
            </div>
            {
                isShowModal &&
                <DiagnosesModal setIsShowModal={setIsShowModal} setDiagnose={setDiagnose} />
            }
        </div>
    )
}
export default Diagnoses;