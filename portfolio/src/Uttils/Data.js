 import front from '../img/fend.png';
  import tool from '../img/tool.png';
  import soft from '../img/softskill.png';
  import back from "../img/bs.png";
 const Data=[
    {
        title:"Frontend",
        icon: front,
        skills:[
        {skill:"HTML5", percentage:"80%"},
        {skill:"CSS", percentage:"90%"},
        {skill:"Boostrap,TailwindCss", percentage:"80%"},
        {skill:"JavaScript", percentage:"70%"},
        {skill:"ReactJs", percentage:"80%"},
        ]
    },
    {
        title:"Backend",
        icon:  back,
        skills:[
        {skill:"CoreJava", percentage:"60%"},
        {skill:"SQL", percentage:"90%"},
        ]
    },
    {
        title:"Tools",
        icon: tool,
        skills:[
        {skill:"Git & GitHub", percentage:"80%"},
        {skill:"Responsive design", percentage:"60%"},
        ]
    },
    {
        title:"Soft Skills",
        icon: soft,
        skills:[
        {skill:"Problem Solving", percentage:"80%"},
        {skill:"Time Management", percentage:"85%"},
        {skill:"Leadership", percentage:"90%"},
        {skill:"Teamwork", percentage:"80%"},
        ]
    }
]
export default Data;