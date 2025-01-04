const TreatmentComponent = ({ isTreatment, setIsTreatment }: { isTreatment: boolean, setIsTreatment: (prev: boolean) => void }) => {
    return (
        <div className="w-full rounded-full bg-white border-[1px] border-[#EBEBEB] flex text-sm p-1" onClick={() => {setIsTreatment(!isTreatment)}}>
            <button className={`flex-1 text-center py-[5.5px] rounded-full w-full ${isTreatment ? "border-[1px] text-black" : "text-[#8F8F8F]"}`}>In treatment()</button>
            <button className={`flex-1 text-center py-[5.5px] rounded-full w-full  ${isTreatment ? "text-[#8F8F8F]" : "border-[1px] text-black"}`}>Deactivated()</button>
        </div>
    )
}
export default TreatmentComponent;