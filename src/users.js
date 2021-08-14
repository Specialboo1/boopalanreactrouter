import React from 'react';
import { Link } from 'react-router-dom';
export default function Users()
{
    let userdata = [{
        id : 1,
        name: "Person 1",
        poisition : "System Architect",
        office: "Chennai",
        age : 30,
        startdate : "12/2020",
        salary : "800000"
    },
    {
        id : 2,
        name: "Person 2",
        poisition : "System Manager",
        office: "Bangalore",
        age : 25,
        startdate : "02/2020",
        salary : "600000"
    },
    {
        id : 3,
        name: "Person 3",
        poisition : "System Engineer",
        office: "Pune",
        age : 27,
        startdate : "06/2020",
        salary : "400000"
    },
    {
        id : 4,
        name: "Person 4",
        poisition : "Senior Developer",
        office: "Delhi",
        age : 32,
        startdate : "04/2020",
        salary : "1000000"
    }]
    return(
        <>
        <h1 class="h3 mb-2 text-gray-800">Users</h1>
        <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the official DataTables documentation.</p>
        <Link to="/createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Createuser</Link>
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
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           userdata.map(obj =>{
                              return <tr>
                                   <td>{obj.id}</td>
                                   <td>{obj.name}</td>
                                   <td>{obj.poisition}</td>
                                   <td>{obj.office}</td>
                                   <td>{obj.age}</td>
                                   <td>{obj.startdate}</td>
                                   <td>{obj.salary}</td>
                                   <td>
                                       <Link to={`/user/edit/ ${obj.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                       <Link to={`/user/edit/ ${obj.id}`} className="btn btn-sm btn-danger ml-2">Delete</Link>
                                   </td>
                                </tr>   
                           })
                       }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
    )
}