import React, { useState } from 'react'
import styles from './styles.css'
import Home from './Home';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import userImage from './Component/UsersProfile.png'

const BasicForms = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntery] = useState([]);

    const submitForm = (e) => {
      e.preventDefault();
         const newEntry = {email : email, password: password, username: username};
         setAllEntery([... allEntry, newEntry]);
         console.log(allEntry);
    }
    const navigate =useNavigate();
    const gotoRegister = () =>{
       navigate('/registeration');
    }
  return (
    <div>
      <>
      <section className='section-form'>
       
      <form action='' onSubmit={submitForm} className='forms'>
        <div>
          <img className='logo-img' src={userImage} alt='userprofile'></img><br></br>
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
                      value={password} placeholder='Enter Password'
                        onChange={(e)=>{setPassword(e.target.value)}}                                              ></input>
        </div>
        {/* <Link class="nav-link active" aria-current="page" to="signup"> */}
             <button type='submit' className='button' onClick={()=>{gotoRegister()}}
             >Log in</button>
             {/* </Link> */}
      </form>
        <p>Create a new acount... <a href='./BasicForms'>Sign In</a></p>
      <div>
        {
          allEntry.map((curElem)=>{
              return (
                <div className='showDataStyle'>
                  <p key={11}>{curElem.username}</p>
                  <p key={10}>{curElem.email}</p>
                  <p key={209}>{curElem.password}</p>
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
