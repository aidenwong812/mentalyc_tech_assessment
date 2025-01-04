import LevelButton from "./levelButton";

const LastComponent = () => {
    return (
        <div className="flex items-center gap-4 px-4 text-[#707070]">
            <div className="xl:flex items-center hidden">
                <img src="/Head/notes.svg" alt="notes" className="size-4" />
                <p className="pl-1 pr-2">12 notes left</p>
                <img src="Head/alert.svg" alt="alert" className="size-4" />
            </div>
            <LevelButton />
            <div className="flex items-center">
                <p className="flex size-11 rounded-full bg-[#D6E4F4] text-black justify-center items-center">
                    M
                </p>
                <img src="Head/down.svg" alt="down" className="size-4 md:flex hidden" />
            </div>
        </div>
    )
}
export default LastComponent;