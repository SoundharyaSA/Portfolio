import React, { useState } from 'react'
import "../Styles/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import MobileNav from './MobileNav'
const Home = () => {
  // let [isopen,setisopen]=useState(false)
    const[openmenu,setopenmenu]=useState(false)
    let tooglemenu=()=>{
      setopenmenu(!openmenu)
    }

  return (
 <>
      <MobileNav isopen={openmenu} tooglemenu={tooglemenu}/> 
      <nav className='navpart'>
        <div className='list'>
          <h1 className='heading'>SA.</h1>

        {/* <ul className={isopen?"navui":"mob_nav"}> */}

        <ul className='navui'>
          <li><a className="menu" href="">Home</a></li>
          <li><a className="menu" href="">Skills</a></li>
          <li><a className="menu" href="">Contact Me</a></li>
        
          <button className='contact-btn' >Hire Me</button>
          </ul>
          <button className='menu-btn' onClick={tooglemenu}> {openmenu? <FontAwesomeIcon icon={faXmark} className='icon'/>:<FontAwesomeIcon  className="icon" icon={faBars}/>}</button>

        {/* <button  className='menu-btn' onClick={()=>setisopen(!isopen)}>
          {isopen? <FontAwesomeIcon icon={faBars} className='icon'/>:<FontAwesomeIcon  className="icon1" icon={faXmark}/>}
        </button> */}
        </div>
    </nav>
    </>
  )
}

export default Home