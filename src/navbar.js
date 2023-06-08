import React, { useState } from 'react'
// import BasicForms from './Component/basicForms';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router'
import logoImage from './Component/R.png';
const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
     <>
     <section className='navbar-bg'>
     <nav class="navbar navbar-expand-lg navbar-light ">
     <div class="container">
       <Link class="navbar-brand" to="/">
        <img src={logoImage} style={{width:'100px',height:'100px'}}></img>
       </Link>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" 
        aria-label="Toggle navigation"
           onClick={()=>{setShow(!show)}}>
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class={`collapse navbar-collapse ${show ? "show" : ""}`} >
         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
           <li class="nav-item">
             <Link class="nav-link active" aria-current="page" to="/">Home</Link>
           </li>
           <li class="nav-item">
             <Link class="nav-link" to="/services">Services</Link>
           </li>
           <li class="nav-item">
             <Link class="nav-link" to="/about">About</Link>
           </li>
           <li class="nav-item">
             <Link class="nav-link" to="/contact">
              Contact</Link>
           </li>
           <li class="nav-item">
           <form class="d-flex">
           
             <Link class="nav-link" to="/basicforms">
             <button class="btn  btn-style" type="submit">
             Sign Up </button></Link>

             <Link class="nav-link" to="/SignUp">
             <button class="btn  btn-style" type="submit">Log in</button>
             </Link>
             </form>
           </li>
           
           
         </ul>
          
       </div>
     </div>
   </nav>
   </section>
     </>
  )
}

export default Navbar
