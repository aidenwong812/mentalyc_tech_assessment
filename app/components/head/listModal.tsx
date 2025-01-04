'use client'

import { useRouter } from "next/navigation";

const ListModal = ({ setIsShowModal }: { setIsShowModal: (prev: boolean) => void }) => {
    const router = useRouter();
    const lists = [
        { title: "New notes", route: "/notes" },
        { title: "Clients", route: "/clients" },
        { title: "Clinicians", route: "/clinicians" },
        { title: "Templates", route: "/templates" }
    ]
    return (
        <>
            <div className="fixed inset-0 transition-opacity" onClick={() => setIsShowModal(false)} />
            <div className="w-full items-center flex flex-col bg-white shadow-md shadow-[#707070] rounded-md absolute z-10 top-10 right-6 py-2">
                {
                    lists.map((list) => (
                        <p key={list.title} className={`text-[#707070] ${list.title !== "Templates" ? "border-b-[1px]" : ""}  w-full border-[#707070] p-2`}
                            onClick={() => { router.push(list.route); setIsShowModal(false) }}>
                            <p>{list.title}</p>
                        </p>
                    ))
                }
            </div>
        </>
    )
}
export default ListModal;