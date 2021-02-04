import React ,{useState} from 'react';

const Table = () => {
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
          <tr>
            <th scope="row">1NNaN50042736 92</th>
            <td><img src="https://randomuser.me/api/portraits/thumb/men/58.jpg" alt=""/></td>
            <td>Theo Duval</td>
            <td>theo.duval@example.com</td>
            <td>01-79-10-63-52</td>
            <td>t1990-06-10T10:51:10.540Z</td>
            

          </tr>
         
        </tbody>
      </table>
    );
};

export default Table;