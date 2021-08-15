import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
export default function Users()
{
    const [userdata, setuserdata] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(async() => {
        try {
           let userdata =  await axios.get("https://60efffc2f587af00179d3c2b.mockapi.io/users");
           setloading(false);
           setuserdata([...userdata.data]) ;          
        } catch (error) {
            console.log(error);
            setloading(false);
        }
        }, [])

    let handledelete = async (id) =>{
        let confirm = window.confirm("Are you sure?");
            if(confirm)
            {         
                try {
                    await axios.delete(`https://60efffc2f587af00179d3c2b.mockapi.io/users/${id}`);
                    let userindex = userdata.findIndex(obj => obj.id === id);
                    userdata.splice(userindex,1);
                    setuserdata([...userdata]);        
                } catch(error)
                {
                    console.log(error);
                }
            }        
    }
    return(
        <>
        <h1 class="h3 mb-2 text-gray-800">Users</h1>
        
        <Link to="/createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-3"><i
                                class="fas fa-download fa-sm text-white-50"></i>Createuser</Link>
        <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Userdata</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                {
                loading ? <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" className="img-responsive" alt="Oops" style={{maxHeight:"250px"}}/> :
                <table class="table table-bordered text-center my-auto" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th class="align-middle">Id</th>
                            <th class="align-middle">Name</th>
                            <th class="align-middle">Avatar</th>
                            <th class="align-middle">CreatedAt</th>
                            <th class="align-middle">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           userdata.map((obj) =>{
                              return <tr>
                                   <td class="align-middle">{obj.id}</td>
                                   <td class="align-middle">{obj.name}</td>
                                   <td class="align-middle"><img src={obj.avatar} alt="Oops" style={{maxHeight:'100px'}}/></td>
                                   <td class="align-middle">{obj.createdAt.substring(0,10)}</td>
                                   <td class="align-middle">
                                       <Link to={`/user/edit/ ${obj.id}`} className="btn btn-sm btn-primary">Edit</Link>    
                                       <button onClick={()=>{handledelete(obj.id)}} className="btn-sm btn-danger ml-2">Delete</button>
                                   </td>
                                </tr>   
                           })
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
