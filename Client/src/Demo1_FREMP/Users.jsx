import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function UsersComp() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const resp = await axios.get("http://127.0.0.1:5000/persons");
    // {status: 200, header:..., data: [{},{}]}
    setUsers(resp.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/persons/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
