import React, { useContext } from 'react';
import { useState } from 'react';
import Usercontext from './usercontext';
import { useHistory } from 'react-router';

function Createuser() {
    var now = new Date(),
    minDate = now.toISOString().substring(0,10);
    const [name, setname] = useState("");
    const [position, setposition] = useState("");
    const [office,setoffice] = useState("");
    const [age, setage] = useState("");
    const [date, setdate] = useState("");
    const [salary, setsalary] = useState("");
    
    const context = useContext(Usercontext);
    const history = useHistory();

let handlesubmit = (e) => {
    e.preventDefault();
    let newdata = {name, position,office, age, startdate : date, salary};
    context.setuserdata([...context.userdata, newdata]);   
    history.push("/user")
}

    return (
<form onSubmit={handlesubmit}>
  <div className='row'>
  <div class="col-auto mt-2">
    <label >Name</label>
    <input type='text' className='form-control'onChange={(e) => {setname(e.target.value)}} value={name} required/>
  </div>
  <div class="col-auto mt-2">
    <label>Position</label>
    <input type='text' className='form-control' onChange={(e) => {setposition(e.target.value)}} value={position} required/>
  </div>
  <div class="col-auto mt-2">
    <label>Office</label>
    <input type='text' className='form-control' onChange={(e) => {setoffice(e.target.value)}} value={office} required/>
  </div>
  <div class="col-auto mt-2">
    <label>Age</label>
    <input type='text' className='form-control' onChange={(e) => {setage(e.target.value)}} value={age} required/>
  </div>
  <div class="col-auto mt-2">
    <label >Start date</label>
    <input type='date' max={minDate} className='form-control'onChange={(e) => {setdate(e.target.value)}} value={date} required/>
  </div>
  <div class="col-auto mt-2">
    <label >Salary</label>
    <input type='text' className='form-control' onChange={(e) => {setsalary(e.target.value)}} value={salary} required/>
  </div>
  </div>
  <div class="row mt-3" >
  <input type="submit" class="mx-auto btn-primary"/>
  </div>
  </form> 
    )
}

export default Createuser
