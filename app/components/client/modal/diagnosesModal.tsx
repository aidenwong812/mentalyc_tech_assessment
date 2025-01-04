
const DiagnosesModal = ({ setIsShowModal, setDiagnose }: { setIsShowModal: (prev: boolean) => void, setDiagnose: (prev: string) => void }) => {
    const diagnoses = [
        { title: "F43.22", text: "Adjustment disorder with anxiety" },
        { title: "F42.54", text: "Anxiety" },
        { title: "F21.276", text: "Disorder" },

    ]
    return (
        <div className="bg-white py-2 rounded-[8px] text-black absolute top-20 w-full shadow-md z-10">
            {diagnoses.map((item) => (
                <div key={item.title} className="p-2 gap-[10px] flex items-center cursor-pointer"
                    onClick={() => {
                        setDiagnose(`${item.title} - ${item.text}`);
                        setIsShowModal(false)
                    }}>
                    <div className="rounded-[4px] text-sm p-1 bg-[#EBEBEB]">
                        {item.title}
                    </div>
                    <p className="text-sm">
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default DiagnosesModal;