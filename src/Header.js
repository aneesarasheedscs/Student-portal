import React from 'react'

const Header = () => {
  return (
     <>
     <header>
        <section className='container main-hero-container'>
          <div className='row'>
               <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center 
               flex-column align-items-start'>
                   <h1 className='display-2'>Welcome to our website.</h1>
                   <p className='main-hero-para'>
                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: 
                   </p>
                   <h3>Get Loged in for more details</h3>
                   <div className='input-group mt-3'>
                      <input type='text' placeholder='Enter Your Email'
                       className='rounded-pill w-75 me-3 p-2 form-control-text'>
                      </input>
                      <div className='input-group-button'>Get more</div>
                   </div>
                   </div>
                   <div className='col-12 col-lg-6 header-right-side 
                    d-flex justify-content-center align-items-center
                    main-herosection-images'>
                     <img src='Education2.jpg' alt='example-image' className='img-fluid'></img>
               
                      <img src='portal3.jpg' alt='example-image' className='img-fluid main-hero-img2'></img>
                   </div>
          </div>
        </section>
     </header>
     </>
  )
}

export default Header
