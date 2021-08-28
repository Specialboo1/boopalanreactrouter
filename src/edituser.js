import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

function Edituser(props) {
  var now = new Date(),
  minDate = now.toISOString().substring(0,10);
  const[loading,setloading] = useState(false);      
  const history = useHistory();
  const formik = useFormik({
    initialValues : {
        name : '',
        avatar : '',
        createdAt : '',
    },
    validate : (values) => 
    {
      const errors = {};
      if(!values.name){
        errors.name = "Required"
      }
    if(!values.avatar){
      errors.avatar = "Required"
    }
    else if(values.avatar.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) == null){
        errors.avatar = "Enter Valid url for the image !"
      }
       return errors;
    },
    onSubmit : async(values) => {
      let name = values.name;
      let avatar = values.avatar;
      let createdAt = values.createdAt;
      try {
        await axios.put(`https://60efffc2f587af00179d3c2b.mockapi.io/users/${+(props.match.params.id)}`,{name, avatar, createdAt});
        setloading(true);
      } catch (error) {
        setloading(false)
        console.log(error);
      }  
      history.push("/user");
    }
  })
    useEffect(async () => {
        try {
          let userdata = await axios.get(`https://60efffc2f587af00179d3c2b.mockapi.io/users/${+(props.match.params.id)}`);
           formik.setFieldValue ("name",userdata.data.name);
          formik.setFieldValue("avatar",userdata.data.avatar);
          formik.setFieldValue("createdAt",userdata.data.createdAt.substring(0,10));
          setloading(false);
        } catch (error) {
          console.log(error);
          setloading(false);
        }
    }, []);


    return (
<>
<form onSubmit={formik.handleSubmit}>
  <div className='row'>
  <div class="col-auto mt-2">
    <label >Name</label>
    <input type='text' name='name' className='form-control' value={formik.values.name} onChange={formik.handleChange}/>
   {
      formik.errors.name ? <span style={{color:'red'}}>{formik.errors.name}</span> : null
   }
  </div>
  <div class="col-auto mt-2">
    <label>Avatarlink</label>
    <input type='text' name='avatar' className='form-control' value={formik.values.avatar} onChange={formik.handleChange} />
    {
       
   formik.errors.avatar ? <span style={{color:'red'}}>{formik.errors.avatar}</span> : null
     
    }
  </div>
  <div class="col-auto mt-2">
    <label >CreatedAt</label>
    <input type='date' name='createdAt' max={minDate} className='form-control' value={formik.values.createdAt} onChange={formik.handleChange} disabled />
  </div>
  </div>
  <div class="row mt-3" >
  <input type="submit" class="mx-auto btn-primary" disabled={loading} value="Update"/>
  </div>
  </form> 
  </>
    )
}

export default Edituser
