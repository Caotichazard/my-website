import React from 'react'
import './skills.css'

import { DiReact,DiGithubBadge,DiJsBadge } from "react-icons/di";
import {SiFlutter} from "react-icons/si"

const Skill_card = ({skill}) => {
    return (
        <div class='skill_card'>
            <div class='skill_icon'>
                {skill}
            </div>
        </div>
    )
}




const Skills = () => {
    var skills_icons = [
        <DiReact size='5em'/>,
        <DiGithubBadge size='6em'/>,
        <DiJsBadge size='4em'/>,
        <SiFlutter size='4em'/>,
    ]
    var skills_arr = []
    skills_icons.forEach(element => {
        skills_arr.push(<Skill_card skill={element}/>)
    })

    return (
        <div class="skills_div">
            <h2>Minhas habilidades</h2>
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









