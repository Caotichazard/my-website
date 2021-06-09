import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';


import Landing from './components/landing/landing'
import About from './components/about_me/about'


class Page extends React.Component{
    render(){
        return (
            <div>
               
                <Landing/>
                <About/>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );