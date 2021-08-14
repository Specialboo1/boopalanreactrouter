import React from 'react';
import { Link } from 'react-router-dom';
import Productcontext from './productcontext';
import { useContext } from 'react';
export default function Product()
{
const context = useContext(Productcontext);
let handledelete = (index) => {
    let confirm = window.confirm("Are you sure?");
    if (confirm)
    {
        context.productdata.splice(index,1);
        context.setproductdata([...context.productdata]);
    }

}
    return(
        <>
        <h1 class="h3 mb-2 text-gray-800">Products</h1>
        <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the official DataTables documentation</p>
        <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                         context.productdata.map((obj, index) =>{
                             return(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.model}</td>
                                    <td>{obj.price}</td>
                                    <td>
                                       <Link to={`/product/edit/${index}`} className="btn btn-sm btn-primary">Edit</Link>
                                       <button onClick={()=>{handledelete(index)}} className="btn btn-sm btn-danger ml-2">Delete</button>
                                   </td>
                                 </tr>)
                         } )                                
                       }     
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
    )
}