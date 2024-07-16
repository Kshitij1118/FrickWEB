import React, { useState } from "react"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import WorkIcon from "@mui/icons-material/Work"
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 180)
  })
  return (
    <>
      <header className='header'>
        <div className='container flex'>
          <div className='logo'>
            <img src='assets/logo.jpg' alt='' />
          </div>
          <div className='nav'>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pages'>Career</Link>
              </li>
              <li>
                <Link to='/blog'>Download</Link>
              </li>
              <li>
                <Link to='/portfolio'>Portfolio</Link>
              </li>
              <li>
                <Link to='/shop'>E-Waste Management</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li className='icon'>
                <SearchOutlinedIcon className='HeaderIcon' />
                <WorkIcon className='HeaderIcon' />
                <GridViewTwoToneIcon className='HeaderIcon' />
              </li>
            </ul>
          </div>
          <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
