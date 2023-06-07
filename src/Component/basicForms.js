import React, { useState } from 'react'
import styles from './styles.css'


const BasicForms = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntery] = useState([]);

    const submitForm = (e) => {
      e.preventDefault();
         const newEntry = {email : email, password: password, username: username};
         setAllEntery([... allEntry, newEntry]);
         console.log(allEntry)
    }
  return (
    <div>
      <>
      <form action='' onSubmit={submitForm} className='forms'>
        <div>
          <img className='logo-img' src='UsersProfile.png' alt='userprofile'></img><br></br>
             <label className='input-label' htmlFor='UserName'>User Name</label>
             <input  className='input-label' type='text' name='username' id='username'
                    value={username}  
                    onChange={(e)=>{setUserName(e.target.value)}}                           ></input>
        </div>
        <div>
          
             <label className='input-label' htmlFor='email'>Email</label>
             <input className='input-label' type='text' name='email' id='email'
                    value={email}  
                    onChange={(e)=>{setEmail(e.target.value)}}                           ></input>
        </div>
        <div>
             <label className='input-label' htmlFor='password'>Password</label>
             <input className='input-label' type='password' name='password' id='password'
                      value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}}                                              ></input>
        </div>

        <button type='submit' className='button'>Login</button>
      </form>
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
      </>
    </div>
  )
}

export default BasicForms
