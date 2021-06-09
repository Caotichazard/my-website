import React from 'react';
import './landing.css';


const Landing = () => {
    return (
        <div class='landing_div'>
            <div class='landing_text'>
            <h1>
                Olá {'{' + 'vistante.nome' + '}'}
            </h1>
            <h2>
                Eu sou Guilherme
            </h2>
            </div>

            
        </div>
    )
}

export default Landing