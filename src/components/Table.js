import React from "react";

function Table({ data, deleteRow, setedit }) {
  console.log(data);
  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Eye Color</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.userName}</td>
              <td>{row.emailAddress}</td>
              <td>{row.age}</td>
              <td>{row.eyeColor}</td>
              <td>{row.balance}</td>
              <td>
                <button onClick={() => setedit(row)}>Edit</button>
                <button onClick={() => deleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && <p>oops no data </p>}
    </div>
  );
}

export default Table;
