import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import {useFormik, isString} from 'formik';

function Productedit(props) {
    const[loading,setloading] = useState(false);
    const[name,setname] = useState("");
       
    const history = useHistory();

    const formik = useFormik({
      initialValues :{
        name: '',
        model : '',
        price : '',
      },
    validate : (values) => 
        {
          const errors = {};
          if(!values.name){
            errors.name = "Required";
          }
          else if(/^[a-zA-Z]+$/.test(values.name))
          {
            errors.name = "Enter valid data";
          }
         if (!values.model)
         {
           errors.model = "Required";
         }
         else if (!isString (values.model))
         {
           errors.model = "Enter valid data";
         }
         if (!values.price)
         {
           errors.price = "Required";
         }
         else if (isNaN(values.price))
         {
           errors.price = "Enter Numerical data";
         }
        
          return errors;
        },
      
      onSubmit : async (values) => {
        let name = values.name;
        let model = values.model;
        let price = values.price;
        try {
          await axios.put(`https://60efffc2f587af00179d3c2b.mockapi.io/products/${props.match.params.id}`,{name,model,price})
         setloading(true);
        } catch (error) {
          setloading(false);
          console.log(error);
        }
         history.push("/product")
      }
    })

    useEffect(async () => {
      try {
       let productdata = await axios.get(`https://60efffc2f587af00179d3c2b.mockapi.io/products/${props.match.params.id}`);
       formik.setFieldValue("name",productdata.data.name);
       formik.setFieldValue("model",productdata.data.model);
       formik.setFieldValue("price",productdata.data.price);
      } catch (error) {
        console.log(error);
      }
       
        }, []);
    return (
<>
<form onSubmit={formik.handleSubmit}>
  <div className='row'>
  <div class="col-auto mt-2">
    <label >Name</label>
    <input type='text' name='name' className='form-control' onChange={formik.handleChange} value={formik.values.name} />
  {
   formik.errors.name ? <span style={{color:'red'}}>{formik.errors.name}</span> : null
  }
  </div>
  <div class="col-auto mt-2">
    <label>Model</label>
    <input type='text' name ='model' className='form-control' onChange={formik.handleChange} value={formik.values.model} />
  {
    formik.errors.model ? <span style={{color:'red'}}>{formik.errors.model}</span> : null
  }
  </div>
  <div class="col-auto mt-2">
    <label>Price</label>
    <input type='text' name ='price' className='form-control' onChange={formik.handleChange} value={formik.values.price} />
  {
    formik.errors.price ? <span style={{color:'red'}}>{formik.errors.price}</span> : null
  }
  </div>
  </div>
  <div class="row mt-3" >
  <input type="submit" class="mx-auto btn-primary" disabled={loading} value="Update"/>
  </div>
  </form> 
  </>
    )
}

export default Productedit
