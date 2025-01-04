import { useState } from "react";
import CheckButton from "../checkButton";

interface Client {
  type: boolean;
  name1: string;
  name2: string;
  birth: string;
  pronoun: string;
  diagnose: string;
  risk: boolean;
  note: string;
}

const ClientInfo = ({ client }: { client: Client }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="border-b-[1px] border-[#E0E0E0] flex w-full py-[9.5px] items-center"
      onClick={() => { setIsChecked(!isChecked) }}>
      <div className="w-10 flex justify-center items-center"><CheckButton isChecked={isChecked} /></div>
      <div className="flex-1 text-sm">{client.name1}</div>
      <div className="flex-1 text-sm">{client.type === false ? client.name2 : client.name1}</div>
      <div className="flex-1 text-sm ">
        {client.type ? (
          <p className="text-black bg-[#EFEAFD] rounded-[4px] p-1 w-fit">Individual</p>
        ) : (
          <p className="text-black bg-[#E2F3FC] rounded-[4px] p-1 w-fit">Couple</p>
        )}
      </div>
      <div className="flex-1 text-sm">{client.birth}</div>
      <div className="flex-1 text-sm">{client.note}</div>
    </div>
  );
};
export default ClientInfo;
