import React from 'react'
import './projects.css'
import {LanguageContext} from "../../language"




const Project_card = ({projects}) => {
    const {project_icon,project_info,project_link} = projects
    return (
        <a href={project_link}>
        <div class='project_card' >
            <div class='project_icon'>
                {project_icon}
            </div>
            <span>
                {project_info}
            </span>
        </div>
        </a>
    )
}





const Projects = () => {
    const { language, setLanguage } = React.useContext(LanguageContext);
    var projects = {
        "BR":[
            {
                project_icon : 'MR',
                project_info: 'App para leitura de quadrinhos e mangas, feito em flutter',
                project_link: 'https://github.com/Caotichazard/Manga-Reader'
            },
            {
                project_icon : 'BB',
                project_info: 'Destiny 2 BreadBuilds, um site feito para auxiliar e facilitar a criação, teorização e compartilhamento de "builds" para o jogo Destiny 2',
                project_link: 'https://caotichazard.github.io/D2_BreadBuilds/'
            },  
        ],
        "US":[
            {
                project_icon : 'MR',
                project_info: 'Comics and Manga reading app made in Flutter',
                project_link: 'https://github.com/Caotichazard/Manga-Reader'
            },
            {
                project_icon : 'BB',
                project_info: 'Destiny 2 BreadBuilds, a website made to ease the building, crafting and sharing of "builds" for the game Destiny 2',
                project_link: 'https://caotichazard.github.io/D2_BreadBuilds/'
            },  
        ]
    }
    var projects_arr = []
    projects[language].forEach(element => {
        projects_arr.push(<Project_card projects={element}/>)
    })
    const text = {
        "BR" : "Meus projetos:",
        "US" : "My projects:",
    }
    return (
        <div class='projects_div'>
            <h2>{text[language]}</h2>
            <br></br>
            <div class='projects_grid'>
            {projects_arr}  
            </div>
            
        </div>
    )
}

export default Projects
