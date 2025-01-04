"use client"
import { useState } from "react";
import { useAtom } from "jotai";
import TreatmentComponent from "./client/treatment";
import FilterComponent from "./client/filter";
import AddComponent from "./client/addcomponent";
import { isShowModalAtom } from "../atoms";
import CreatModal from "./client/modal";
import ClientList from "./client/modal/clientlist";

const ClientPage = () => {
    const [isTreatment, setIsTreatment] = useState(true);
    const [isShowModal, setIsShowModal] = useAtom(isShowModalAtom);
    return (
        <div className="relative h-[80vh]">
            {isShowModal &&
                <>
                    <CreatModal setIsShowModal={setIsShowModal} />
                </>
            }
            
            <div className="flex flex-col w-full xl:px-24 px-4 gap-4 duration-200">
                <p className="font-bold text-black text-[20px]">Clients</p>
                <TreatmentComponent isTreatment={isTreatment} setIsTreatment={setIsTreatment} />
                <div className="flex md:gap-4 gap-2 w-full items-end">
                    <FilterComponent />
                    <AddComponent />
                </div>
                <div className="flex w-full justify-center">
                    <ClientList />
                </div>
            </div>
        </div>
    )
}
export default ClientPage;  