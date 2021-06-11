import React from 'react';
import "./language_select.css"

import {LanguageContext} from "../../language"


export const LanguageSelect = () => {
    
    const flags = {
        "BR": <img alt="BR" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/br.svg" class="flag" onClick={() => setLanguage("BR")}/>,
        "US": <img alt="US" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/us.svg" class="flag" onClick={() => setLanguage("US")}/>
    }
    
    const { language, setLanguage } = React.useContext(LanguageContext);
    const Lang_opt = []
    Object.keys(flags).forEach((element)=>{
        if(element != language){
            Lang_opt.push(flags[element])
        }
    })
    
    return (
        <div class="language_select">
            <div class="language_options">
            {Lang_opt}
            
            </div>
            
            {flags[language]}
        </div>
    )
}

export default LanguageSelect