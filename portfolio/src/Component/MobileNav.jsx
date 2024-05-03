import React from 'react'
import "../Styles/MobileNav.css"
const MobileNav = ({isopen,tooglemenu}) => {
  return (
  
    <div className={`mob ${isopen?"active":""}`} onClick={tooglemenu}>
    <div className='mob-nav'>
      <h1 className='heading'>SA.</h1>
      <ul>
        <li><a className="menu" href="">Home</a></li>
        <li><a className="menu" href="">Skills</a></li>
        <li><a className="menu" href="">Contact Me</a></li>

        <button className='contact-btn' onClick={() => { }}>Hire Me</button>
      </ul>
    </div>
    </div>
    
  )
}

export default MobileNav