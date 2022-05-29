import "./App.css";
import React, { useRef, useState } from "react";
import {
  ProSidebar,
  Menu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
// import Router from "./routes/routes";
import Logo from "./assets/img/logo.svg"

import { HiSearch } from "react-icons/hi";
import {FiMail , FiBell} from "react-icons/fi"
import {MenuItem} from "react-pro-sidebar"
import {AiOutlineUser } from "react-icons/ai"
import Registration_teacher from "./Page/Registration_teacher copy 5/Registration_teacher";
import Registration_user from "./Page/Registration_user/Registration_user";
import Registration_worker from "./Page/Registration_worker/Registration_worker";
import Dashboard from "./Page/Dashboard/Dashboard";
import List_Student from "./Page/List_Student/List_Student";
import List_Teacher from "./Page/List_Teacher/List_Teacher";
import List_Worker from "./Page/List_Worker/List_Worker";
import Payment from "./Page/Payment/Payment";
import Group from "./Page/Group/Group";
import Courses from "./Page/courses/Courses";
import Login from "./Page/Login/Login";
import { Routes, Route } from "react-router-dom";

import { FaList, FaRegHeart, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { FiHome, FiLogOut, FiAlignJustify } from "react-icons/fi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { RiPencilLine, RiWallet3Line } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import "react-pro-sidebar/dist/css/styles.css";
const activeStyle = {
  display: "block",
};

const notActive = {
  display: "none",
};

function App() {
  const { pathname } = useLocation();

  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const closemune = useRef();

  return (
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
      <div id="header">
        <ProSidebar collapsed={menuCollapse} className={` ${pathname === "/" ? "notActive" : ""}`}>
          <SidebarHeader>
            <div className="hamburger">
              <div className="closemenu" onClick={menuIconClick}>
                <FaList style={{ ...(menuCollapse && { display: "block" }) }} />
              </div>
              <div className="closemenur" onClick={menuIconClick}>
                <FaList style={{ ...(menuCollapse && { display: "block" }) }} />
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square" className="hiddin">
              <MenuItem
                className={`menuItems  ${
                  pathname === "/" ? "default_active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/Dashboard"}>
                  <i class="bx bxs-dashboard"></i> Dashboard
                </NavLink>
              </MenuItem>
              <SubMenu
                style={{ paddingLeft: "-10px" }}
                title={"Registration"}
                icon={<i class="bx bx-credit-card-front"></i>}
              >
                <MenuItem
                  className={`menuItem ${
                    pathname === "/Registration_user" ? "active" : ""
                  }`}
                >
                  <NavLink className="menu-links" to={"/Registration_user"}>
                    Student
                  </NavLink>{" "}
                </MenuItem>
                <MenuItem
                  className={`menuItem ${
                    pathname === "/Registration_teacher" ? "active" : ""
                  }`}
                >
                  <NavLink className="menu-links" to={"/Registration_teacher"}>
                    Teacher
                  </NavLink>
                </MenuItem>
                <MenuItem
                  className={`menuItem ${
                    pathname === "/Registration_worker" ? "active" : ""
                  }`}
                >
                  <NavLink className="menu-links" to={"/Registration_worker"}>
                    Worker
                  </NavLink>
                </MenuItem>
              </SubMenu>
              <MenuItem
                className={`menuItems ${
                  pathname === "/List_Student" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/List_Student"}>
                  <i class="bx bx-user"></i>List of Students
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${
                  pathname === "/List_Teacher" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/List_Teacher"}>
                  <i class="bx bx-user-voice"></i>List of Teachers
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${
                  pathname === "/List_Worker" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/List_Worker"}>
                  <i class="bx bxs-user-badge"></i> List of Wokers
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${
                  pathname === "/Payment" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/Payment"}>
                  <i class="bx bx-wallet-alt"></i>Payment
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${pathname === "/Group" ? "active" : ""}`}
              >
                <NavLink className="menu-links" to={"/Group"}>
                  <i class="bx bx-group"></i>Group
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${
                  pathname === "/Courses" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/Courses"}>
                  <i class="bx bxs-graduation"></i>Crouses
                </NavLink>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square" ref={closemune}>
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
        <div className="sidebar-body">
          {/* <Router menuCollapse={menuCollapse} /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/Dashboard"
              element={<Dashboard menuCollapse={menuCollapse} />}
            />
            <Route
              path="/Registration_teacher"
              element={<Registration_teacher menuCollapse={menuCollapse} />}
            />
            <Route
              path="/List_Student"
              element={<List_Student menuCollapse={menuCollapse} />}
            />
            <Route
              path="/Registration_user"
              element={<Registration_user menuCollapse={menuCollapse} />}
            />
            <Route
              path="/Registration_worker"
              element={<Registration_worker menuCollapse={menuCollapse} />}
            />
            <Route
              path="/List_Teacher"
              element={<List_Teacher menuCollapse={menuCollapse} />}
            />
            <Route
              path="/List_Worker"
              element={<List_Worker menuCollapse={menuCollapse} />}
            />
            <Route
              path="/Group"
              element={<Group menuCollapse={menuCollapse} />}
            />
            <Route
              path="/Payment"
              element={<Payment menuCollapse={menuCollapse} />}
            />
            <Route
              path="/Courses"
              element={<Courses menuCollapse={menuCollapse} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
