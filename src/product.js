import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
export default function Product()
{
    const [productdata,setproductdata] = useState([])
    const [loading,setloading] = useState(true);
    useEffect(async () => {
        try {
           let apidata = await axios.get("https://60efffc2f587af00179d3c2b.mockapi.io/products");
           setproductdata([...apidata.data]);
           setloading(false);
        } catch (error) {
            console.log(error);
            setloading(false);
        }        
    }, [])
    

    let handledelete = async (id) => {
        let confirm = window.confirm("Are you sure ?");
    if (confirm)
    {
    try {
        await axios.delete(`https://60efffc2f587af00179d3c2b.mockapi.io/products/${id}`);
        let productindex = productdata.findIndex(obj => obj.id === id);
        productdata.splice(productindex,1);
        setproductdata([...productdata]);        
    } catch(error)
    {
        console.log(error);
    }
    }
}

    return(
        <>
        <h1 class="h3 mb-2 text-gray-800">Products</h1>
        
            <Link to="/createproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-3"><i
                                class="fas fa-download fa-sm text-white-50"></i>Createproduct</Link>
        <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Productdata</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
            {
                loading ? <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" className="img-responsive" alt="Oops" style={{maxHeight:"250px"}}/> :
                <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                             <th>Id</th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         productdata.map((obj) =>{
                        
                             return(
                                <tr>
                                    <td class="align-middle">{obj.id}</td>
                                    <td class="align-middle">{obj.name}</td>
                                    <td class="align-middle">{obj.model}</td>
                                    <td class="align-middle">{obj.price}</td>
                                    <td class="align-middle">
                                       <Link to={`/product/edit/${obj.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                       <button onClick={()=>{handledelete(obj.id)}} className="btn btn-sm btn-danger ml-2">Delete</button>
                                   </td>
                                 </tr>)
                         } )                                
                       }     
                    </tbody>
                </table>
                    }
            </div>
        </div>
    </div>
    </>
    )
}