import React ,{useEffect, useState} from 'react';
import axios from "axios";
import { response } from 'express';

const Table = () => {

  const [users, setUsers]= useState([
    // Took out hard coded values and left an empty array. Added useEffect then imported axios
  ]);

  // useEffect call back function when the component mounts. Call axios.get and parse in multiple users. Added .then which returns a response
  useEffect(() =>{
axios.get("https://randomuser.me/api/?results=50").then(response => {
  console.log(response.data)

})
  }, []); 
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