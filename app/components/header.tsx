import FirstComponent from "./head/firstCom";
import LastComponent from "./head/lastCom";

const Header = () => {
    return (
        <div className="bg-white flex px-24 justify-between">
            <FirstComponent/>
            <LastComponent/>
        </div>
    )
}
export default Header;