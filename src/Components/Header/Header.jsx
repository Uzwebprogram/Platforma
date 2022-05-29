import "./Header.css"
import Logo from "./../../assets/img/logo.svg"

import { HiSearch } from "react-icons/hi";
import {FiMail , FiBell} from "react-icons/fi"
import {MenuItem} from "react-pro-sidebar"
import {AiOutlineUser } from "react-icons/ai"
import {useLocation} from 'react-router-dom'
// import Sidebar from "../Sidebar/Sidebar";
function Header(){
    const pathname = useLocation()
    return(
        <>
        <section className={`header-section ${pathname === "/" ? "notActive" : ""}`}>
            <div className="container">
                <div className="header">
                <div className="header-left">
                <img src={Logo} width={250} height={54} alt="" />
            </div>
            <div className="header-right">
            <ul className="header-item">
                <li className="header-item-list">
                <MenuItem className="header-item-list-icon" icon={<HiSearch/>}/>
                </li>
                <li className="header-item-list">
                <MenuItem className="header-item-list-icon" icon={<FiMail/>}/>
                </li>
                <li className="header-item-list">
                <MenuItem className="header-item-list-icon" icon={<FiBell/>}/>
                </li>
                <li className="header-item-list">
                <MenuItem className="header-item-list-icon-user" icon={<AiOutlineUser/>}/>
                <p className="header-item-list-padding">Saidbek <br /> Atambayev</p>
                </li>
            </ul>
            </div>
                </div>
            </div>

        </section>
        {/* <Sidebar menuCollapse/> */}
        </>
    )
}
export default Header