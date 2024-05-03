import React, { useState } from 'react'
import "../Styles/Skills.css"
import Skillcard from './Skillcard'
import Data from '../Uttils/Data'; 
import Content from './Content';

const Skills = () => {
  console.log(Data[0].icon);
  let [skill,setskill]=useState(Data[0])

   const handleskill=(x)=>{
    setskill(x)
   }
  return (
      <section className='skill-container'>
      <h5>Technical Proficiency</h5>
      <div className="skillcontent">
        <div className="skill">
          {
          Data.map((item,index)=>{
            return(
            <Skillcard
            key={index}
            icon={item.icon}
            title={item.title}
            isactive={skill.title===item.title}
            onClick={()=>handleskill(item)}/>
         
          )
          })

          }
    
        </div>
        <div className="content">
           <Content
           head={skill.title}
           skill={skill.skills}/>
        </div>
      </div>

      </section>
    
  )
}

export default Skills