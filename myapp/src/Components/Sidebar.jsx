import React from 'react'
import {
BsCart3
}
    from 'react-icons/bs'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { LuDroplet } from "react-icons/lu";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""} style={{ backgroundColor: "#181818" }}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <div style={{ display: "flex" }}>
                        <BsCart3 className='icon_header' />
                        <div>
                            <h3 style={{ fontSize: "25px", letterSpacing: "1px", fontWeight: "bold", marginBottom: "-2px" }}>Peters</h3>
                            <h5 style={{ fontSize: "8px", letterSpacing: "5px", fontWeight: "bold", marginLeft: "2px" }}>SURGICAL</h5>
                        </div>
                    </div>

                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <hr style={{ width: "100%", backgroundColor: "black", borderBottom: "1px solid gray", height: "2px" }} />
            <div style={{ width: "100%", height: "auto",paddingLeft:"12%" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600 }}>DATA-IN</h3>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <a href="" style={{ backgroundColor: "", width: "auto", display: "flex", alignItems: "center", justifyContent: "flex-start",marginLeft:"-14%" }}>
                            {/* <div  style={{ backgroundColor: "", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}> */}
                                <MdOutlineEnergySavingsLeaf className='icon' /> Energy
                                <IoMdArrowDropdown fontSize={"25px"} />
                            {/* </div> */}
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="" style={{ backgroundColor: "", width: "auto", display: "flex", alignItems: "center", justifyContent: "flex-start",marginLeft:"-14%" }}>
                            {/* <div  style={{ backgroundColor: "", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}> */}
                            <LuDroplet className='icon' style={{fontSize:"25px"}} /> <p  style={{fontSize:"15px",fontWeight:"bold",backgroundColor:"",paddingTop:"2%",height:"10px"}}>Water and Effluents</p>
                                <IoMdArrowDropdown fontSize={"25px"} />
                            {/* </div> */}
                        </a>
                    </li>

                </ul>
            </div>
            <hr style={{ width: "100%", backgroundColor: "black", borderBottom: "1px solid gray", height: "2px" }} />
            <div style={{ width: "100%", height: "auto",paddingLeft:"12%" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600 }}>ANALYZE</h3>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <a href="" style={{ backgroundColor: "", width: "auto", display: "flex", alignItems: "center", justifyContent: "flex-start",marginLeft:"-14%" }}>
                            {/* <div  style={{ backgroundColor: "", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}> */}
                                <MdOutlineEnergySavingsLeaf className='icon' /> Energy
                                <IoMdArrowDropdown fontSize={"25px"} />
                            {/* </div> */}
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="" style={{ backgroundColor: "", width: "auto", display: "flex", alignItems: "center", justifyContent: "flex-start",marginLeft:"-14%" }}>
                            {/* <div  style={{ backgroundColor: "", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}> */}
                            <LuDroplet className='icon' style={{fontSize:"25px"}} /> <p  style={{fontSize:"15px",fontWeight:"bold",backgroundColor:"",paddingTop:"2%",height:"10px"}}>Water</p>
                                <IoMdArrowDropdown fontSize={"25px"} />
                            {/* </div> */}
                        </a>
                    </li>

                </ul>
            </div>
            <button style={{ width: "60%", height: "50px", backgroundColor: "#02ab6c ", color: "#fff", fontSize: "10px", border: "0px solid", borderRadius: "10px", marginLeft:"20%",fontWeight:"bold" }}>Open Help Center</button>
        </aside>
    )
}

export default Sidebar