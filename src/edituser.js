import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';

function Edituser(props) {
  var now = new Date(),
  minDate = now.toISOString().substring(0,10);
  const [name, setname] = useState("");
  const [avatar, setavatar] = useState("");
  const [createdAt,setcreatedAt] = useState(""); 
  const[loading,setloading] = useState(false);  
    
  const history = useHistory();

    useEffect(async () => {
        try {
          let userdata = await axios.get(`https://60efffc2f587af00179d3c2b.mockapi.io/users/${+(props.match.params.id)}`);
          setname(userdata.data.name);
          setavatar(userdata.data.avatar);
          setcreatedAt(userdata.data.createdAt.substring(0,10));
          setloading(false);
        } catch (error) {
          console.log(error);
          setloading(false);
        }
    }, []);

let handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://60efffc2f587af00179d3c2b.mockapi.io/users/${+(props.match.params.id)}`,{name,avatar,createdAt});
      setloading(true);
    } catch (error) {
      console.log(error);
      setloading(false);
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
    <label>Avatar</label>
    <input type='text' className='form-control' onChange={(e) => {setavatar(e.target.value)}} value={avatar} required/>
  </div>
  <div class="col-auto mt-2">
    <label >CreatedAt</label>
    <input type='date' max={minDate} className='form-control'onChange={(e) => {setcreatedAt(e.target.value)}} value={createdAt} required/>
  </div>
  </div>
  <div class="row mt-3" >
  <input type="submit" class="mx-auto btn-primary" disabled={loading} value="Update"/>
  </div>
  </form> 
    )
}

export default Edituser
