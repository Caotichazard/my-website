import React from 'react';
import './landing.css';
import {LanguageContext} from "../../language"

const Landing = () => {
    const { language } = React.useContext(LanguageContext);
    const phrases = {
        "BR":{
            hello : 'Olá {visitante.nome}',
            iam: 'Eu sou Guilherme',
        },
        "US":{
            hello : 'Hello {visitor.name}',
            iam: 'I am Guilherme',
        }
    }
    
    return (
        <div class='landing_div'>
            <div class='landing_text'>
            <h1>
                {phrases[language].hello}
            </h1>
            <h2>
                {phrases[language].iam}
            </h2>
            </div>

            
        </div>
    )
}

export default Landing