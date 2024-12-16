import React from 'react'

function PersonalDetails(props) {
  return (
    <div className='App'>
      <h1><ins>Personal Details</ins></h1>
      <h2>First Name:{props.firstname}</h2>
      <h2>LastName:{props.lastname}</h2>
      <h2>Gender:{props.gender}</h2>
      <h2>Age:{props.age}</h2>
      <h2>FatherName:{props.fathername}</h2>
      <h2>Qualification:{props.qualification}</h2>
      <h2>Stream:{props.stream}</h2>
      <h2>Designation:{props.designation}</h2>
    </div>
  )
}

export default PersonalDetails
