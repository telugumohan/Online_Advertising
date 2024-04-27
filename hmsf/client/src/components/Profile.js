import React, { useState } from "react";
import axios from "axios";

export default function Profile() {
  const [result, setResult] = useState(null);

  if (result == null) {
    axios.get("http://localhost:8081/show").then((response) => {
      console.log(JSON.stringify(response.data));
      setResult(response.data);
    });
    return <div>There is no data to display...</div>;
  } else {
    return (
      <div>
        <br />
        <h2 align="center">The data is given below</h2>
        <table border="1" style={{marginTop:'10rem', marginLeft:'40rem'}}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>

          {result.map((user) => {
            return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
            );
          })}
        </table>
      </div>
      
    );
    
  }
}
