import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';


import Landing from './components/landing/landing'
import About from './components/about_me/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import LanguageSelect from './components/language_select/language_select'
import ProfXp from './components/professional_xp/professional_xp';
import { Helmet } from 'react-helmet';


import {LanguageContext} from './language'

export const Body = () => {
    const [language, setLanguage] = React.useState("BR");
    const value = { language, setLanguage };
    return (
        <LanguageContext.Provider value={value}>
        <div>
            <LanguageSelect/>
        
            <div>
            
                <Landing/>
                <About/>
                <Skills/>
                <ProfXp/>
                <Projects/>
                <Contact/>
            </div>
        </div>
        </LanguageContext.Provider>
    )
}





export const Page = () => {

    

    return (
        <div>
        <Helmet>
            <title>Guilherme Salomão</title>
        </Helmet>
        
        <Body/>
        </div>
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );