 import React from 'react'
 import Navbar from './navbar'
 import Header from './Header'
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
 import About from './About';
 import {Redirect} from "react-router-dom";
import BasicForms from './BasicForms';
 import Contact from './Contact';
 import Services from './Services';
 import SignUp from './SignUp';
 import Registration from './Registration'

 const App = () => {
   return (
     <>
     <Router>
     <Navbar />
     {/* <Header /> */}
    
     <Routes>
          <Route exact path="/" element={<Header />} />
           <Route exact path="about" element={<About />}  />
           <Route exact path="contact" element={<Contact />}  />
           <Route exact path="services" element={<Services />}  />
           <Route exact path="basicforms" element={<BasicForms />}  />
           <Route exact path="signup" element={<SignUp />}  />
           <Route exact path="registeration" element={<Registration />}  />
          
           
 
        </Routes>
        
        </Router>
        
     </>
   )
 }
 
 export default App
 