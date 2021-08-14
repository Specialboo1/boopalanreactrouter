import React from 'react';
import { Link } from 'react-router-dom';
export default function Product()
{
    let productdata = [
        {
         "id": "1",
         "name": "Dodge Accord",
         "model": "Silverado",
         "price": 87880
        },
        {
         "id": "2",
         "name": "Lamborghini Fiesta",
         "model": "Grand Cherokee",
         "price": 9862
        },
        {
         "id": "3",
         "name": "Nissan Fiesta",
         "model": "Model S",
         "price": 79810
        },
        {
         "id": "4",
         "name": "Smart Malibu",
         "model": "Accord",
         "price": 54767
        },
        {
         "id": "5",
         "name": "Mini Sentra",
         "model": "Model T",
         "price": 30262
        },
        {
         "id": "6",
         "name": "Fiat Impala",
         "model": "Model S",
         "price": 43172
        },
        {
         "id": "7",
         "name": "Porsche Explorer",
         "model": "Countach",
         "price": 44115
        },
        {
         "id": "8",
         "name": "Toyota Fortwo",
         "model": "CX-9",
         "price": 69220
        },
        {
         "id": "9",
         "name": "Audi Prius",
         "model": "Spyder",
         "price": 30328
        },
        {
         "id": "10",
         "name": "Land Rover Fortwo",
         "model": "Silverado",
         "price": 10952
        }
       ]
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
                         productdata.map(obj =>{
                             return(
                                <tr>
                                    <td>{obj.id}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.model}</td>
                                    <td>{obj.price}</td>
                                    <td>
                                       <Link to={`/product/edit/${obj.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                       <Link to={`/product/edit/${obj.id}`} className="btn btn-sm btn-danger ml-2">Delete</Link>
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