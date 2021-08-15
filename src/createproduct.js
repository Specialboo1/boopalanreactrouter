import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

function Createproduct() {
  
  const [name,setname] = useState("");
  const[model,setmodel] = useState("");
  const[price,setprice] = useState("");
  const[loading,setloading] = useState(false)
  const history = useHistory();

let handlesubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("https://60efffc2f587af00179d3c2b.mockapi.io/products",{name,model,price})
   setloading(true);
  } catch (error) {
    setloading(false);
    console.log(error);
  }
   history.push("/product")
}

    return (
<form onSubmit={handlesubmit}>
  <div className='row'>
  <div class="col-auto mt-2">
    <label >Name</label>
    <input type='text' className='form-control'onChange={(e) => {setname(e.target.value)}} value={name} required/>
  </div>
  <div class="col-auto mt-2">
    <label>Model</label>
    <input type='text' className='form-control' onChange={(e) => {setmodel(e.target.value)}} value={model} required/>
  </div>
  <div class="col-auto mt-2">
    <label>Price</label>
    <input type='text' className='form-control' onChange={(e) => {setprice(e.target.value)}} value={price} required/>
  </div>
  </div>
  <div class="row mt-3" >
  <input type="submit" class="mx-auto btn-primary" disabled={loading} value="Submit"/>
  </div>
  </form> 
    )
}

export default Createproduct
