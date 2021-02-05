import React ,{useEffect, useState} from 'react';
import axios from "axios"

const Table = () => {

  const [users, setUsers]= useState([
    // Took out hard coded values and added useeffect and imported axios
  ]

  )
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
         {users.map((user) =>(
          //  for every user in the user array, I render a table row.
//  * Below, addded jsx expressions to be able to add values */
<tr>
  
<th scope="row">{user.id.value}</th>
<td><img src={user.picture.thumbnail}></img></td>
<td>{user.name.first} {user.name.last}</td>
<td>{user.email}</td>
<td>{user.phone}</td>
<td>{user.dob.date}</td>
</tr>
         ))}
         
        </tbody>
      </table>
    );
};

export default Table;