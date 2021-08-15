import React, { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';

function Productedit(props) {
    const [name, setname] = useState("");
    const [model, setmodel] = useState("");
    const [price,setprice] = useState("");
    const[loading,setloading] = useState(false)
       
    const history = useHistory();

    useEffect(async () => {
      try {
       let productdata = await axios.get(`https://60efffc2f587af00179d3c2b.mockapi.io/products/${props.match.params.id}`);
       setname(productdata.data.name);
       setmodel(productdata.data.model);
       setprice(productdata.data.price);
      } catch (error) {
        console.log(error);
      }
       
        }, []);

let handlesubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.put(`https://60efffc2f587af00179d3c2b.mockapi.io/products/${props.match.params.id}`,{name,model,price});
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
  <input type="submit" class="mx-auto btn-primary" value="Update" disabled={loading}/>
  </div>
  </form> 
    )
}

export default Productedit