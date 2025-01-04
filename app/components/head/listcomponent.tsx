'use client'

import { usePathname, useRouter } from "next/navigation";

const List = () => {
    const router = useRouter();
    const pathname = usePathname();
    const lists = [
        { title: "New notes", route: "/notes" },
        { title: "Clients", route: "/clients" },
        { title: "Clinicians", route: "/clinicians" },
        { title: "Templates", route: "/templates" }
    ]
    return (
        <div className="w-full items-center sm:gap-8 gap-2 flex">
            {
                lists.map((list) => (
                    <p key={list.title} className={` text-[16px] ${pathname.includes(list.route)?"border-b-[#731054] mt-[14px] pb-[14px] border-b-[4px] text-[#731054] font-bold": "text-[#707070]"} `} 
                    onClick={() => { router.push(list.route) }}>
                        <p className="hidden sm:flex">{list.title}</p>
                    </p>
                ))
            }
            <p className="xl:flex hidden p-4 text-[16px] bg-gradient-to-l from-[#DE0D6F] to-[#731054] bg-clip-text text-transparent ">
                Earn $80
            </p>
        </div>
    )
}
export default List;