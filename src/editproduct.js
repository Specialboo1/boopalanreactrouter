import React from 'react'

function Editproduct(props) {
    return (
        <div>
             <h2> Productdata:{props.match.params.id} </h2>
        </div>
    )
}

export default Editproduct
