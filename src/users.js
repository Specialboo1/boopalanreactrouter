import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Usercontext from './usercontext';
export default function Users()
{
    const context = useContext(Usercontext);

    let handledelete = (index) =>{
        let confirm = window.confirm("Are you sure?");
            if(confirm)
            {            
            context.userdata.splice(index,1);
            context.setuserdata([...context.userdata]);
            }        
    }
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
                           context.userdata.map((obj,index) =>{
                              return <tr>
                                   <td>{index+1}</td>
                                   <td>{obj.name}</td>
                                   <td>{obj.position}</td>
                                   <td>{obj.office}</td>
                                   <td>{obj.age}</td>
                                   <td>{obj.startdate}</td>
                                   <td>{obj.salary}</td>
                                   <td>
                                       <Link to={`/user/edit/ ${index+1}`} className="btn btn-sm btn-primary">Edit</Link>    
                                       <button onClick={()=>{handledelete(index)}} className="btn-sm btn-danger ml-2">Delete</button>
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
