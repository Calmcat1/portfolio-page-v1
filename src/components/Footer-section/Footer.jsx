import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
       <footer className="footer bg__nimbus text-white pb-5">
         <div className="container">
           <div className="row">
             <div className="col-md-4">
               <h2 className="header__poppins">Connect with me:</h2>
               <a href="https://github.com/calmcat1" target="_blank" className="font__poppins">GitHub</a><br></br>
               <a href="https://www.linkedin.com/in/lee-gitonga-3a5921242/" target="_blank" className="font__poppins">LinkedIn</a><br></br>
               <a href="mailto:tarafikicom@gmail.com" className="font__poppins">Email</a><br></br>
             </div>
             <div className="col-md-4">
               <h1></h1>
             </div>
             <div className="col-md-4">
               <h1></h1>
             </div>
           </div>
         </div>
       </footer>
    </div>
  )
}

export default Footer
