import React from 'react'
import './professional_xp.css'
import {LanguageContext} from "../../language"




const ProfXpCard = ({profxp}) => {
    const {xp_place,xp_position,xp_duration} = profxp
    return (
        
        <div class='profxp_card' >
            <span class="profxp_position">
                {xp_position}
            </span>
            
            <span class="profxp_place">
                {xp_place}
            </span>
            <span class="profxp_duration">
                {xp_duration}
            </span>
            
        </div>
        
    )
}





const ProfXp = () => {
    const { language } = React.useContext(LanguageContext);
    var profxps = {
        "BR":[
            {
                xp_place: "Instituto de Pesquisas Eldorado",
                xp_position: "Desenvolvedor de Software Trainee",
                xp_duration: "08/2021 - Atualmente"
            }
        ],
        "US":[
            {
                xp_place: "Instituto de Pesquisas Eldorado",
                xp_position: "Software Developer Trainee",
                xp_duration: "08/2021 - Currently"
            } 
        ]
    }
    var profxps_arr = []
    profxps[language].forEach(element => {
        profxps_arr.push(<ProfXpCard profxp={element}/>)
    })
    const text = {
        "BR" : "Experiência profissional:",
        "US" : "Professional experience:",
    }
    return (
        <div class='profxps_div'>
            <h2>{text[language]}</h2>
            <br></br>
            <div class='profxps_grid'>
            {profxps_arr}  
            </div>
            
        </div>
    )
}

export default ProfXp
