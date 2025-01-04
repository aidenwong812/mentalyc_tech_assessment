import { useAtom } from "jotai";
import { clientNameAtom, clientsAtom, clinicianNameAtom } from "@/app/atoms";
import CheckButton from "../checkButton";
import ClientInfo from "./clientInfo";

const ClientList = () => {
    const [clients] = useAtom(clientsAtom);
    const [clientName,] = useAtom(clientNameAtom);
    const [clinicianName,] = useAtom(clinicianNameAtom);

    if (clients.length < 2) {
        return <p className="text-black">🙁 Oops! No matches found. Please double-check your input.</p>;
    }
    return (
        <div className="w-full h-[320px] overflow-auto flex flex-col text-black bg-white">
            <div className="border-b-[1px] border-[#E0E0E0] flex w-full py-[9.5px]">
                <div className="w-10 flex justify-center items-center"><CheckButton isChecked={false} /></div>
                <div className="font-bold flex-1 text-sm">Client name</div>
                <div className="font-bold flex-1 text-sm">Clinician name</div>
                <div className="font-bold flex-1 text-sm">Client type</div>
                <div className="font-bold flex-1 text-sm">Last session</div>
                <div className="font-bold flex-1 text-sm">Unsaved notes</div>
            </div>
            {clients.map((client) => {
                if (clientName && clientName !== client.name1) return null;
                if (clinicianName && clinicianName !== client.name2) return null;
                if(client.name1 === '') return null;
                return (
                    <ClientInfo key={client.name1} client={client} />
                )
            })}
        </div>
    )
}
export default ClientList;
