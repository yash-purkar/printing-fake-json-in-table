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
      <h1>Hi</h1>
      <Table striped bordered hover border="1">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Street</th>
            <th>City</th>
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
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default DataTable;