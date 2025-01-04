import AddButton from "./addbutton";

const AddComponent = () => {
    return (
        <div className="flex w-full items-center md:gap-2 flex-1 md:justify-end flex-col md:flex-row gap-6">
            <div className="h-[1px] bg-[#E0E0E0] w-full xl:flex hidden xl:max-w-[38%]"/>
            <button className="flex gap-2 items-center px-4 py-2">
                <img src="/Client/deactivate.svg" alt="deactivate" className="size-4"/>
                <p className="text-[#731054]">Deactivate</p>
            </button>
            <AddButton/>
        </div> 
    )
}
export default AddComponent;