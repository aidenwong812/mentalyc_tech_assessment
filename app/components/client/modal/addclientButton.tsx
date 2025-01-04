import { birthyearAtom, clientsAtom, diagnoseAtom, isIndividualAtom, name1Atom, name2Atom, pronounAtom, isRiskedAtom, noteAtom } from "@/app/atoms";
import { useAtom } from "jotai";

const AddClientButton = ({ setIsShowModal }: { setIsShowModal: (prev: boolean) => void }) => {
    const [clients, setClients] = useAtom(clientsAtom);
    const [name1, setName1] = useAtom(name1Atom);
    const [name2, setName2] = useAtom(name2Atom);
    const [isIndividual, setIsIndividual] = useAtom(isIndividualAtom);
    const [birthyear, setBirth] = useAtom(birthyearAtom);
    const [diagnose, setDiagnose] = useAtom(diagnoseAtom);
    const [isRisked, setIsRisked] = useAtom(isRiskedAtom);
    const [note, setNotes] = useAtom(noteAtom);
    const [pronoun, setPronoun] = useAtom(pronounAtom);
    const newClient = {
        type: isIndividual,
        name1: name1,
        name2: name2,
        pronoun: pronoun,
        birth: birthyear,
        diagnose: diagnose,
        risk: isRisked,
        note: note,
    }
    return (
        <div className="flex justify-end w-full">
            <button className="px-4 py-2 text-white bg-[#731054] rounded-[4px] disabled:opacity-70"
                disabled={!name1}
                onClick={() => {
                    setClients([...clients, newClient]);
                    setIsShowModal(false);
                    setName1("");
                    setName2("");
                    setIsIndividual(true);
                    setDiagnose("F43.22 - Adjustment disorder with anxiety");
                    setBirth("");
                    setIsRisked(false);
                    setPronoun("He/Him");
                    setNotes("");
                }}>
                Add client
            </button>
        </div>
    );
}
export default AddClientButton;
