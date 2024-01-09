import React from 'react'
import './Projects.css'
import graphixCentralv2 from '../../Images/graphixCentralv2.1.png';
import SmartHome from '../../Images/SmartHomeSite.png';
import taraCryptoVersion2 from '../../Images/taraCryptoversion2Site.png';

const Projects = () => {
  return (
    <div>
       <div class="projects__wrapper">

            <div className="project__content">

              <h1 className="tech_stack__heading__text text-center" id="project__h">Project Highlights</h1>

              {/* graphix-central-v2 */}
                <div class="content mt-5">
                 <div class="container mt-4">
                   <div class="row">
                     <div class="col-md-5">
                       <img src={graphixCentralv2} alt="Image" class="img-fluid img-styling-1"></img>
                     </div>
                     <div class="col-md-7">
                       <div class="jumbotron text-white p-5 m-4 border-style-1">
                         <h1 class="tech_stack__heading__text">Graphix-Central-v2</h1>
                         <p class="lead font__poppins">Framework React, Bootstrap version of GraphixCentral ,essentially the version 2, Frontend only</p>
                         <hr class="my-4"></hr>
                         <a class="btn btn-primary" href="https://graphix-central-v2.vercel.app/"><b>Demo &rarr;</b></a>
                       </div>
                     </div>
                   </div>
                 </div>
                </div>

              {/* graphix-central v1 */}

              <div class="content mt-5">
                <div class="container mt-4">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="jumbotron text-white p-5 m-4 border-style-1">
                        <h1 class="display-4 tech_stack__heading__text">TaraCrypto-v2</h1>
                        <p class="lead font__poppins">full stack website made on django and deployed on vercel</p>
                        <hr class="my-4"></hr>
                        <a class="btn btn-primary" href="https://tara-crypto-blog.vercel.app/home/"><b>Demo &rarr;</b></a>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <img src={taraCryptoVersion2} alt="Image" class="img-fluid img-styling-1"></img>
                    </div>
                  </div>
                </div>
              </div>


               {/* Smart-home */}
               <div class="content mt-5">
                 <div class="container mt-4">
                   <div class="row">
                     <div class="col-md-5">
                       <img src={SmartHome} alt="Image" class="img-fluid img-styling-1"></img>
                     </div>
                     <div class="col-md-7">
                       <div class="jumbotron text-white p-5 m-4 border-style-1">
                         <h1 class="tech_stack__heading__text">Smart-home</h1>
                         <p class="lead font__poppins">System for the Smart design a home business, the website, simple</p>
                         <hr class="my-4"></hr>
                         <a class="btn btn-primary" href="https://calmcat1.github.io/Smart-design-a-home/Smart design a Home Project/index.html"><b>Demo &rarr;</b></a>
                       </div>
                     </div>
                   </div>
                 </div>
                </div>




            </div>
        
            <div class="top__ellipse__projects-container">
              <div class="top__ellipse__projects"></div>
              <div class="top__ellipse__projects"></div>
              <div class="top__ellipse__projects"></div>
              <div class="top__ellipse__projects"></div>
            </div>

        </div>
    </div>
  )
}

export default Projects
