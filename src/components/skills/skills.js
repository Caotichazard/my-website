import React from 'react'
import './skills.css'
import {LanguageContext} from "../../language"
import { DiReact,DiGit,DiJavascript,DiPython,DiMysql,DiMarkdown,DiLinux,DiHtml5,DiCss3,DiJava } from "react-icons/di";
import {SiFlutter,SiC,SiCplusplus,SiDart,SiFlask,SiSpring} from "react-icons/si"
import {MdLanguage} from "react-icons/md"

const SkillCard = ({skill}) => {
    const {skill_icon,skill_name} = skill
    return (
        <div class='skill_card'>
            <div class='skill_icon'>
                {skill_icon}
            </div>
            <span>
            {skill_name}
            </span>
        </div>
    )
}




const Skills = () => {
    const lang_text = [
        {
            'BR': "Português Brasileiro nativo",
            'US' : "Native Brazillian Portuguese",
        },
        {
        'BR': "Inglês avançado",
        'US' : "Advanced English",
        }
    ]
    const { language } = React.useContext(LanguageContext);
    var skills_icons = [
        {
            skill_icon : <DiReact size='5rem'/>,
            skill_name: 'ReactJS'
        },
        {
            skill_icon : <DiGit size='6rem'/>,
            skill_name: 'Git'
        },
        {
            skill_icon : <DiJavascript size='4rem'/>,
            skill_name: 'JavaScript'
        },
        {
            skill_icon : <SiFlutter size='4rem'/>,
            skill_name: 'Flutter'
        },
        {
            skill_icon : <DiPython size='4rem'/>,
            skill_name: 'Python'
        },
        {
            skill_icon : <SiFlask size='4rem'/>,
            skill_name: 'Flask'
        },
        {
            skill_icon : <DiMysql size='4rem'/>,
            skill_name: 'MySQL'
        },
        {
            skill_icon : <DiMarkdown size='4rem'/>,
            skill_name: 'Markdown'
        },
        {
            skill_icon : <DiLinux size='4rem'/>,
            skill_name: 'Linux'
        },
        {
            skill_icon : <DiHtml5 size='4rem'/>,
            skill_name: 'HTML5'
        },
        {
            skill_icon : <DiCss3 size='4rem'/>,
            skill_name: 'CSS'
        },
        {
            skill_icon : <DiJava size='4rem'/>,
            skill_name: 'Java'
        },
        {
            skill_icon : <SiSpring size='4rem'/>,
            skill_name: 'Spring MVC'
        },
        {
            skill_icon : <SiC size='4rem'/>,
            skill_name: 'C'
        },
        {
            skill_icon : <SiCplusplus size='4rem'/>,
            skill_name: 'C++'
        },
        {
            skill_icon : <SiDart size='4rem'/>,
            skill_name: 'Dart'
        },
        {
            skill_icon : <MdLanguage size='4rem'/>,
            skill_name: lang_text[0][language]
        },
        {
            skill_icon : <MdLanguage size='4rem'/>,
            skill_name: lang_text[1][language]
        },
        
        
        
    ]
    var skills_arr = []
    skills_icons.forEach(element => {
        skills_arr.push(<SkillCard skill={element}/>)
    })

    const text = {
        "BR" : 'Minhas habilidades:',
        "US" : 'My skills:'
    }
    return (
        <div class="skills_div">
            <h2>{text[language]}</h2>
            <br></br>
            <div class='skills_grid'>
                {
                skills_arr
                }
                
            </div>
        </div>
    )
}

export default Skills









