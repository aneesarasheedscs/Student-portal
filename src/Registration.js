import React from 'react'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from 'react';

const Registration = () => {
  
  const [inputarr, setInputarr]=useState([])
  const [inputdata, SetInputdata]= useState({
    name: '',
    rollNo: '',
    classname: ''
  })
  function changeHandle(e){

      SetInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  let {name, rollNo,classname}=inputdata;
  function changeHandle2 (){
    setInputarr([...inputarr,{name,rollNo,classname}])
    
    console.log(inputdata, "input data what we Enter")

    SetInputdata({name:'',rollNo:'',classname:''})
  }
  function changeHandle3(){
    console.log("Object store in arrya" ,inputarr)
  }
  function removeHandle(ind){
    const newArray = inputarr.splice( inputdata=> inputdata.ind !== ind)
    setInputarr(newArray)
         console.log('botn clicked' , newArray)
      
        
  }
      
  
  return (
    
            <div className="Appp">
                 <input type='text' className='inputss' name='name' placeholder='Enter Roll No#'
                  value={inputdata.name} onChange={changeHandle} /><br />
                 <input type='text' className='inputss' name='rollNo' placeholder='Enter Name'
                 value={inputdata.rollNo} onChange={changeHandle} /><br />
                 <input type='text' className='inputss' name='classname' placeholder='Enter Class'
                 value={inputdata.className} onChange={changeHandle} /><br />

                 <button className='add'  onClick={changeHandle2}>Add </button><br/>
                 <button className='add' onClick={changeHandle3}>Check data in Console </button><br />

                 <table border={1} width='40%' cellPadding={10}>
                  <tbody>
                     <tr>
                      <th>Roll No</th>
                      <th>Name</th>
                      <th>Class</th>
                     </tr>
                     {
                      inputarr.map(
                        (info,ind)=>{
                          return(
                                 <tr key={ind}>
                                    <td>{info.name}</td>
                                    <td>{info.rollNo}</td>
                                    <td>{info.classname}</td>
                                    <td>
                                    <button className='remove' onClick={()=> removeHandle(ind)}>Remove</button>
                                    </td>
                                 </tr>
                          )
                        }
                      )
                     }
                     </tbody>
                 </table>

            </div>
  )
}
export default Registration
