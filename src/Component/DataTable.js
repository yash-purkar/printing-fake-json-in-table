import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function DataTable() {

  const [userData, setUserData] = useState([]);
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))

  })
  return (
    <>
      <h1>Students Data</h1>
      <table border="1">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Street</th>
            <th>City</th>
            <th>Website</th>
          </tr>
          {
            userData.map((data) => {
              return (
                <>
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.address.street}</td>
                    <td>{data.address.city}</td>
                    <td>{data.website}</td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default DataTable;