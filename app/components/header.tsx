import FirstComponent from "./head/firstCom";
import LastComponent from "./head/lastCom";

const Header = () => {
    return (
        <div className="bg-white flex xl:px-24 px-2 justify-between duration-200">
            <FirstComponent/>
            <LastComponent/>
        </div>
    )
}
export default Header;