import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'
import user1 from "../assets/Images/user1.avif"
import { IoMdArrowDropdown } from "react-icons/io";
function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon' >
        <BsJustify className='icon' onClick={OpenSidebar} />

      </div>
      <div className='header-left'>

      </div>
      <div className='header-right' style={{ display: "flex", alignItems: "center" }}>
     
        <div className='icon' style={{ backgroundColor: "", width: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src={user1} alt="" style={{ width: "30px", borderRadius: "50%" }} />
          <IoMdArrowDropdown fontSize={"25px"} />
        </div>
        <BsFillBellFill className='icon'>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1
         
          </span>
        </BsFillBellFill>

      </div>
    </header>
  )
}

export default Header