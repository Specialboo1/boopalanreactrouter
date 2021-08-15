import axios from 'axios';
import React, {useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

function Createuser() {
    var now = new Date(),
    minDate = now.toISOString().substring(0,10);
    const [name, setname] = useState("");
    const [avatar, setavatar] = useState("");
    const [createdAt,setcreatedAt] = useState(""); 
    const[loading,setloading] = useState(false);   
    const history = useHistory();    

let handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://60efffc2f587af00179d3c2b.mockapi.io/users",{name,avatar,createdAt});
      setloading(true);
    } catch (error) {
      setloading(false)
      console.log(error);
    }  
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
    <label>Avatarlink</label>
    <input type='text' className='form-control' onChange={(e) => {setavatar(e.target.value)}} value={avatar} required/>
  </div>
  <div class="col-auto mt-2">
    <label >CreatedAt</label>
    <input type='date' max={minDate} className='form-control'onChange={(e) => {setcreatedAt(e.target.value)}} value={createdAt} required/>
  </div>
  </div>
  <div class="row mt-3" >
  <input type="submit" class="mx-auto btn-primary" disabled={loading}/>
  </div>
  </form> 
    )
}

export default Createuser
