import React from 'react'
import BackReact from '../BackReact/BackReact'
import IconosSocials from '../IconosSocials/IconosSocials'
import MyWorks from '../MyWorks/MyWorks'

import './HomeContainer.scss'

const HomeContainer = () => {
  return (
    <div className='appContainer'>
      <div className= 'new'>
         <div className='homeContainer'>
        <div>
          <div className='textImg'>
              <img className='imgPerfil' src="../../img/img-profile.svg " alt="img-perfil" />
              <section className='secText'>
                  <h1 className='pName'>Fernando Valdés </h1>
                  <p className='nFront'>Frontend Web Developer</p>
              </section> 
          </div>
        </div>
        
        <div>
        <address className='iconsSocial' >
          <IconosSocials/>
        </address>
           <section className='pPresent'>
              <p className='pDescription'>Desde hace muchos años me he dedicado a la programacion
                  en lenguaje c++ para microcontroladores electronicos.
                  <br  /><br />En 2023 comence a investigar sobre los distintos lenguajes de
                  programacion tomando la decicion de comenzar la carrera 
                  fullstack.
                  <br />Desde que inicié mi viaje en el mundo de la programación web,
                  descubri herramientas y ramas increhibles <br /><br />
                  Durante mi formación como desarrollador Frontend,
                  tuve la oportunidad invaluable de aplicar mis habilidades
                  en un entorno práctico y real.
              </p>
          </section>
        </div>
      </div>
      <BackReact/>
        <section  className='sectionWorks'>
          <MyWorks/>
        </section>
      </div>
    </div>
  )
}

export default HomeContainer
