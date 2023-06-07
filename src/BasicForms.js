import React, { useState } from 'react'
import styles from './styles.css'
import Home from './Home';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const BasicForms = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const [allEntry, setAllEntery] = useState([]);

    const submitForm = (e) => {
      e.preventDefault();
         const newEntry = {email : email, password: password, username: username, number: number};
         setAllEntery([... allEntry, newEntry]);
         console.log(allEntry)
    }
    const navigate =useNavigate();
    const gotoRegister = () =>{
            
       navigate('/registeration');
    }
  return (
    <div>
      <>
      <section className='section-form'>
      <h2 className='registration'>Registration</h2>
      <form action='' onSubmit={submitForm} className='forms'>
        <div>
          <img className='logo-img' src='UsersProfile.png' alt='userprofile'></img><br></br>
             <label className='input-label' htmlFor='UserName'>User Name</label>
             <input  className='input-label' type='text' name='username' id='username'
                    value={username}  placeholder='Enter Your Name'
                    onChange={(e)=>{setUserName(e.target.value)}}                           ></input>
        </div>
        <div>
          
             <label className='input-label' htmlFor='email'>Email</label>
             <input className='input-label' type='text' name='email' id='email'
                    value={email}  placeholder='Enter Email'
                    onChange={(e)=>{setEmail(e.target.value)}}                           ></input>
        </div>
        <div>
             <label className='input-label' htmlFor='password'>Password</label>
             <input className='input-label' type='password' name='password' id='password'
                      value={password} placeholder='Enter password'
                        onChange={(e)=>{setPassword(e.target.value)}}                                              ></input>
        </div>
        <div>
             <label className='input-label' htmlFor='number'>Phone No#</label>
             <input className='input-label' type='number' name='number' id='number'
                      value={number} placeholder='Enter Phone Number'
                        onChange={(e)=>{setNumber(e.target.value)}}                                              ></input>
        </div>
        {/* <Link class="nav-link active" aria-current="page" to="signup"> */}
             <button type='submit' className='button' onClick={()=>{gotoRegister()}}>
                Sign Up</button>
                {/* </Link> */}
      </form>
        <p>Create a new acount... <a href='#'>Sign In</a></p>
      <div>
        {
          allEntry.map((curElem)=>{
              return (
                <div className='showDataStyle'>
                  <p key={11}>{curElem.username}</p>
                  <p key={10}>{curElem.email}</p>
                  <p key={209}>{curElem.password}</p>
                  <p key={209}>{curElem.number}</p>
                </div>
              )
          })
        }
      </div>
      </section>
      </>
    </div>
  )
}

export default BasicForms
