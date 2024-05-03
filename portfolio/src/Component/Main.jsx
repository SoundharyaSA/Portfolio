import React from 'react'
import "../Styles/Main.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import kid from "../img/kid.avif"
// import hero from "../img/hero.jpg"
import react from '../img/logo192.png'
import html from "../img/html.png"
import css from "../img/css3.jpg"
import js from "../img/JavaScript-logo.png"
import resume from "../img/Resume1.pdf"
const Main = () => {
  return (
    <>
    <div className='main'>
       <div className='bothmain'>
        <div className='leftmain'>
          <span>Hi,I Am</span>
          <span>Soundharya</span>
          {/* <span>Frontend Developer</span> */}
          <p>
            I'm a Frontend Developer Specializing in React.js, Proficient in <br /> Creating Interactive User Interfaces and Responsive Web Applications.</p>
            <div className='hire'>
            <button className='hire-btn'>Hire me</button> 
            <a href={resume} id='a-hire'><button className='hire-btn'  download="Resume">Resume</button></a> 
            </div>
         
          <div className="social" style={{ display: "flex", gap: "1rem", marginTop:"2rem"}}>
           <div> <a className="sc" href='https://github.com/SoundharyaSA'><GitHubIcon style={{ height: "4rem", transform: "scale(2)", color: " #f5c32c" }} /></a></div> 
           <div><a className='sc' href='https://linkedin.com/in/soundharya12/'><LinkedInIcon style={{ height: "4rem", transform: "scale(2)", color: "#f5c32c" }} /></a></div> 

          </div>
        </div>
      </div>
      <div className='rightmain'>
        <div>
          <div className='hero'>
          <img src={react} alt="" style={{height:"3rem"}}/>
          </div>
         <img src={kid} alt="" style={{height:"20rem", borderRadius:'3rem'}}/>
        </div>

        <div>
          <div className='hero'>
            <img src={html} alt="" style={{height:"3rem"}}/>
          </div>
          <div className='hero'>
            <img src={css} alt="" style={{height:"3rem"}}/>
          </div>
          <div className='hero'>
            <img src={js} alt="" style={{height:"3rem"}}/>
          </div>
        </div>
       

      </div>

        

    </div>
    </>
  )
}

export default Main