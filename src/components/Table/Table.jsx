import React ,{useEffect, useState} from 'react';
import axios from "axios";


const Table = () => {

  const [users, setUsers]= useState([
    // Took out hard coded values and left an empty array. Added useEffect then imported axios
  ]);

  // useEffect call back function when the componentDid mount. Call axios.get and parse in multiple users. Added .then which returns a response

  // Added usersToDisplay to display the changes on the browser.after making the api call, the users will be stored in the setUsersDisplay and setUsers
  const [usersToDisplay, setUsersToDisplay]= useState([]);

  useEffect(() =>{
axios.get("https://randomuser.me/api/?results=50").then(response => {
  console.log(response.data)
  // set the response on state
  setUsersToDisplay(response.data.results);
  setUsers(response.data.results);
  

});
// An empty dependency array inside useEffect, mimics componentDid mount to prevent repeated calls
  }, []); 

  // Added a function to sort by name. This should execute when name in the column heading is clicked.

  const sortByName = ()=> {

    // sorting an array of objects
    const sortedUsers = users.sort((a,b) => {
      const aValue = a.name.first;
      const bValue = a.name.first;

      if (aValue < bValue){
        return 1;
      
      }
      return 0;
    }
    );
    console.log(sortedUsers)
    setUsersToDisplay(sortedUsers);

  }
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col" onClick={sortByName}>Email</th>
            <th scope="col">Phone</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
         {usersToDisplay.map((user) =>(
          //  for every user in the user array, I render a table row.
//  * Below, addded jsx expressions to be able to add values */
<tr key={user.id.value}>
  
<th scope="row">{user.id.value}</th>
<td><img src={user.picture.thumbnail} alt={user.name.first}></img></td>
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