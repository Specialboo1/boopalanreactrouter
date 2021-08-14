import React, { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import Productcontext from './productcontext';

function Productedit(props) {
    const [name, setname] = useState("");
    const [model, setmodel] = useState("");
    const [price,setprice] = useState("");
       
    const context = useContext(Productcontext);
    const history = useHistory();

    useEffect(() => {
        let editdata = context.productdata[props.match.params.id];
        setname(editdata.name);
        setmodel(editdata.model);
        setprice(editdata.price);
        }, []);

let handlesubmit = (e) => {
    e.preventDefault();
    let editdata = {name, model, price};
    context.productdata[props.match.params.id -1] = editdata;
    context.setproductdata([...context.productdata]);   
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
  <input type="submit" class="mx-auto btn-primary" value="Update"/>
  </div>
  </form> 
    )
}

export default Productedit