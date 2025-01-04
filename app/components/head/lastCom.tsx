"use client"
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import LevelButton from "./levelButton";
import ListModal from "./listModal";

const LastComponent = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    return (
        <div className="flex items-center gap-4 px-4 text-[#707070] py-2 relative">
            <div className="flex items-center">
                <img src="/Head/notes.svg" alt="notes" className="size-4 xl:flex hidden" />
                <p className="pl-1 pr-2 xl:flex hidden">12 notes left</p>
                <img src="Head/alert.svg" alt="alert" className="xl:size-4 flex size-8" />
            </div>
            <LevelButton />
            <div className="flex items-center">
                <p className="flex xl:size-11 size-8 rounded-full bg-[#D6E4F4] text-black justify-center items-center">
                    M
                </p>
                <img src="Head/down.svg" alt="down" className="size-4 md:flex hidden" />
            </div>
            <SlOptionsVertical
                className="bg-white text-[#8F8F8F] shadow-md shadow-gray-400 flex sm:hidden size-8 justify-end items-center p-1 rounded-lg"
                onClick={() => {
                    setIsShowModal(true);
                }}
            />
            {
                isShowModal && <ListModal setIsShowModal={setIsShowModal}/>
            }
        </div>
    )
}
export default LastComponent;