import RadioButton from "../radioButton";

const ClientType = ({ isIndividual, setIsIndividual }: { isIndividual: boolean, setIsIndividual: (prev: boolean) => void }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
                <p className="text-[12px]">Client type</p>
                <p className="text-[#F3404F]">*</p>
            </div>
            <div className="flex gap-2">
                <div className="flex p-1 items-center gap-2 cursor-pointer" onClick={() => { setIsIndividual(true) }}>
                    <RadioButton isSelected={isIndividual} />
                    <p className="text-black bg-[#EFEAFD] rounded-[4px] p-1">Individual</p>
                </div>
                <div className="flex p-1 items-center gap-2 cursor-pointer" onClick={() => { setIsIndividual(false) }}>
                    <RadioButton isSelected={!isIndividual} />
                    <p className="text-black bg-[#E2F3FC] rounded-[4px] p-1">Couple</p>
                </div>
            </div>
        </div>
    )
}
export default ClientType;