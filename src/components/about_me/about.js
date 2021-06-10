import React from 'react'
import './about.css'





const About_text = ({info}) => {
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
    var about_me = [
        {
            info_title : 'Quem sou eu?',
            info_p: 'Meu nome é Guilherme Locca Salomão e sou estudante de Ciencia da computação na Universidade Federal de São Carlos (UFSCar), cursando atualmente meu 3° ano. Adoro desafios, enigmas e quebra cabeças, além disso amo poder usar minha criatividade para poder encontrar soluções para esses problemas. Programação para mim é uma forma de continuar fazendo isso e ainda poder sempre me desafiar a fazer algo melhor.'
        },
        
        
        
        
    ]
    var about_arr = []
    about_me.forEach(element => {
        about_arr.push(<About_text info={element}/>)
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
