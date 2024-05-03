import React from 'react'
import "../Styles/Content.css"
const Content = ({ head, skill }) => {
    return (
        <div className='contentcard'>
            <h5>{head}</h5>
            
            <div className="contentcontainer">
                {skill.map((x, index) => {
                    return (
                        <div key={`skill_${index}`}>
                            <div className='contentinfo'>
                                <p>{x.skill}</p>
                                <p className='per'>{x.percentage}</p>
                            </div>
                            <div className='contentin'>
                                <div className="skill-content"
                                    style={{ width: x.percentage }}></div>
                            </div>




                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Content