import React from 'react'
import "../Styles/Skillcard.css"
const Skillcard = ({title,icon,isactive,onClick}) => {
  return (
    <div className={`skillcard ${isactive ? "active":""}`}
    onClick={()=>onClick()}>

        <div className="skillicon">
            <img src={icon} alt={title} style={{height:"2rem"}}/>
        </div>
        <span>{title}</span>

    </div>

  )
}

export default Skillcard