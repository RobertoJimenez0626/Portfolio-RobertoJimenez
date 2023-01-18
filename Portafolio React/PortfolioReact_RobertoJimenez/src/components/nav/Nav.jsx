import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {RiUserHeartLine} from 'react-icons/ri'
import {BsBook} from 'react-icons/bs'
import {MdHomeRepairService} from 'react-icons/md'
import {AiFillFolderOpen} from 'react-icons/ai'
import {BiMessageAltDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><IoHomeOutline /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><RiUserHeartLine /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BsBook /></a>
      <a href="#vocational" onClick={() => setActiveNav("#vocational")} className={activeNav === "#vocational" ? "active" : ""}><MdHomeRepairService /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><AiFillFolderOpen /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageAltDetail /></a>
    </nav>
  )
}

export default Nav