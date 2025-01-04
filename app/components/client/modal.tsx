"use client"
import { useState } from "react";
import { useAtom } from "jotai";
import { isIndividualAtom } from "@/app/atoms";
import ClientType from "./modal/clienttype";
import NameComponent from "./modal/namecomponent";
import Pronouns from "./modal/pronouns";
import BirthInput from "./modal/birth";
import Diagnoses from "./modal/diagnoses";
import RiskClient from "./modal/riskclient";
import AddClientButton from "./modal/addclientButton";
import ExtraNotes from "./modal/note";

const CreatModal = ({ setIsShowModal }: { setIsShowModal: (prev: boolean) => void }) => {
    const [isIndividual, setIsIndividual] = useAtom(isIndividualAtom);
    const [isDiagnoseModal, setIsDiagnoseModal] = useState(false);
    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsShowModal(false)}/>
            <div className=" rounded-2xl p-6 flex flex-col justify-center gap-6 bg-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-black">
                <div className="flex flex-col gap-6" onClick={() => { setIsDiagnoseModal(false) }}>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col relative">
                            <button className=" absolute right-0 top-0 size-6 text-sm" onClick={() => { setIsShowModal(false) }}>
                                X
                            </button>
                            <p className="font-bold text-[20px]">Add new client</p>
                        </div>
                        <p className="text-[14px] text-[#707070] text-center">
                            This client information is essential for generating detailed clients documents
                        </p>
                    </div>
                    <ClientType isIndividual={isIndividual} setIsIndividual={setIsIndividual} />
                    <NameComponent isIndividual={isIndividual} />
                    {isIndividual && <Pronouns />}
                    {isIndividual && <BirthInput />}
                </div>
                <Diagnoses isShowModal={isDiagnoseModal} setIsShowModal={setIsDiagnoseModal} />
                <div className="flex flex-col gap-6 w-full" onClick={() => { setIsDiagnoseModal(false) }}>
                    <RiskClient />
                    <ExtraNotes />
                    <AddClientButton setIsShowModal={setIsShowModal} />
                </div>
            </div>
        </>
    )
}
export default CreatModal;