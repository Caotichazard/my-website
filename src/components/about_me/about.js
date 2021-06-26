import React from 'react'
import './about.css'
import {LanguageContext} from "../../language"




const AboutText = ({info}) => {
    const {info_title,info_p} = info
    return (
        <div class='about_text'>
            <h2>
                    {info_title}
                 </h2>
                <p>
                    {info_p}
                </p>
        </div>
    )
}






const About = () => {
    const { language } = React.useContext(LanguageContext);
    var about_me = {
        "BR":[
            {
            info_title : 'Quem sou eu?',
            info_p: 'Meu nome é Guilherme Locca Salomão e sou estudante de Ciencia da computação na Universidade Federal de São Carlos (UFSCar, São Carlos, São Paulo, Brasil), cursando atualmente meu 3° ano. Adoro desafios, enigmas e quebra cabeças, além disso amo poder usar minha criatividade para poder encontrar soluções para esses problemas. Programação para mim é uma forma de continuar fazendo isso e ainda poder sempre me desafiar a fazer algo melhor e continuar aprendendo.'
            }
        ],
        "US":[
            {
            info_title : 'Who am I?',
            info_p: 'My name is Guilherme Locca Salomão and I am a Computer Science student at Universidade Federal de São Carlos (UFSCar, São Carlos, São Paulo, Brazil), currently enrolled in  my 3° year. I like challenges, riddles and puzzles, not only that I love being able to use my creativity to find solutions to those problems. Programming for me is a way to continue doing that and also allow me to challenge my self to do something better and keep learning.'
            }
        ],
 
    }
    var about_arr = []
    about_me[language].forEach(element => {
        about_arr.push(<AboutText info={element}/>)
    })
    return (
        <div class="about_div">
            <div class="about_grid">
            {about_arr}
            </div>
                
            

        </div>
    )
}

export default About
