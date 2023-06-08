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
    rollNo: '',
    name: '',
    classname: ''
  })
  let [index, setIndex]= useState()
  let [bolin,setBolin]=useState(false)
  let { rollNo,name,classname}=inputdata;
  function changeHandle(e){

      SetInputdata({...inputdata,[e.target.name]:e.target.value})
  }
 
  function changeHandle2 (e){
    e.preventDefault();
    if(name===""&& rollNo==="" && classname===""){
      alert("Enter Name and Roll Number")
    }
    else {
    setInputarr([...inputarr,{rollNo,name,classname}])
    
    console.log(inputdata, "input data what we Enter")
    SetInputdata({ rollNo:'', name:'', classname:''})
    }
  }

  function changeHandle3(){
    console.log("Object store in arrya" ,inputarr)
  }
  function removeHandle(i){
      let total=[...inputarr]
      total.splice(i,1)
      setInputarr(total);
        console.log(i, 'this is index row')
      
        
  }
  function updateHandle(i){
        let {rollNo,name,classname} =inputarr[i]
        SetInputdata({rollNo,name,classname})
        setBolin(true)
        setIndex(i)
  }
   function updateinfo(){
    let total=[...inputarr]
      total.splice(index,1,{rollNo,name,classname})
      setInputarr(total)
      setBolin(false)
      SetInputdata({rollNo,name,classname})
      
   }   
  
  return (
    
            <div className="Appp">
                 <input type='number' className='inputss' name='rollNo' placeholder='Enter Roll No#'
                  value={inputdata.rollNo} onChange={changeHandle} /><br />
                 <input type='text' className='inputss' name='name' placeholder='Enter Name'
                 value={inputdata.name} onChange={changeHandle} /><br />
                 <input type='text' className='inputss' name='classname' placeholder='Enter Class'
                 value={inputdata.classname} onChange={changeHandle} /><br />

                 <button className='add'  onClick={!bolin?changeHandle2:updateinfo}>{!bolin?`Add`:`Update` }</button><br/>
                 <button className='add' onClick={changeHandle3}>Check data in Console </button><br />

                 <table border={1} width='40%' cellPadding={10}>
                  <tbody>
                     <tr>
                      <th>Roll No</th>
                      <th>Name</th>
                      <th>Class</th>
                      <th>Update</th>
                      <th>Delete</th>
                     </tr>
                     {
                      inputarr && inputarr.map(
                        (info, i)=>{
                          return(
                                 <tr key={i}>
                                    <td>{info.rollNo}</td>
                                    <td>{info.name}</td>
                                    <td>{info.classname}</td>
                                    <td>
                                    <button className='remove' onClick={()=> updateHandle(i)}>Edit</button>
                                     </td>
                                     <td>
                                    <button className='remove' onClick={()=> removeHandle(i)}>Delete</button>
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
