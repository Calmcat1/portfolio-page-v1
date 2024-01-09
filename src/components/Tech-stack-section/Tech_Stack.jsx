import React from 'react'
import './Tech_Stack.css'
import CSS from '../../Images/CSS-Logo.png';
import Django from '../../Images/django-logo.png';
import Html from '../../Images/html-logo.png';
import Javascript from '../../Images/javascript-logo-0.png';
import Python from '../../Images/python-logo-png-open-2000.png';
import react from '../../Images/react-logo.png';

const Tech_Stack = () => {
  return (
    <div>
      <div class="top__ellipse-container">
            <div class="top__ellipse"></div>
            <div class="top__ellipse"></div>
            <div class="top__ellipse"></div>
            <div class="top__ellipse"></div>
          </div>


      <div className="tech_stack__wrapper">
          <div className="tech_stack__heading">
            <h1 class="tech_stack__heading__text text-center" id="tech__stack_h">Tech stack</h1>
          </div>

          <div className="tech_stack__images">
            <div className="tech_stack__image__container">
              <img src={CSS} className="normal__img" ></img>
              <img src={Django} className="normal__img"></img>
              <img src={Html} className="normal__img"></img>
              <img src={Javascript} className="special__img"></img>
              <img src={Python} className="special__img"></img>
              <img src={react} className="special__img"></img>
            </div>
          </div>

          <div className='tech_stack__experience'>
            <h1 class="tech_stack__heading__text text-center mb-5">Experience</h1>

              <div class="container-fluid custom-container pb-5">
        
                <div class="card tech_stack__custom_card">
                  <div class="card-body">
                    <h5 class="tech_stack__heading__text text-center">CSS</h5>
                    <p class="card-text">Some content for card 1.</p>
                  </div>
                </div>

                <div class="card tech_stack__custom_card">
                  <div class="card-body">
                    <h5 class="tech_stack__heading__text text-center">JS</h5>
                    <p class="card-text">Some content for card 2.</p>
                  </div>
                </div>

                <div class="card tech_stack__custom_card">
                  <div class="card-body">
                    <h5 class="tech_stack__heading__text text-center">HTML</h5>
                    <p class="card-text">Some content for card 3.</p>
                  </div>
                </div>

                <div class="card tech_stack__custom_card">
                  <div class="card-body">
                    <h5 class="tech_stack__heading__text text-center">React</h5>
                    <p class="card-text">Some content for card 3.</p>
                  </div>
                </div>

              </div>

          </div>

      </div>
    </div>
  )
}

export default Tech_Stack
