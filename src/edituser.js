import React from 'react'

function Edituser(props) {
    return (
        <div>
           <h2> Userdata:{props.match.params.id} </h2>
        </div>
    )
}

export default Edituser
