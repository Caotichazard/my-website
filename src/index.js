import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';


import Landing from './components/landing/landing'
import About from './components/about_me/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'

import { Helmet } from 'react-helmet';

class Page extends React.Component{
    render(){
        return (
            <div>
            <Helmet>
                <title>Guilherme Salomão</title>
            </Helmet>
            <div>
               
                <Landing/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );