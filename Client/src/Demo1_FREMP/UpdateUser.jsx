import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function UpdateUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userToUpdate, setUserToUpdate] = useState(false);

  const fetchUsers = async () => {
    const resp = await axios.get("http://127.0.0.1:5000/persons");
    // {status: 200, header:..., data: [{},{}]}
    setUsers(resp.data);
  };

  const getUserData = (e) => {
    const user = users.find((user) => user._id === e.target.value);
    setUserToUpdate(user);
  };

  const updateUser = async () => {
    await axios.put(`http://127.0.0.1:5000/persons/${userToUpdate._id}`, {
      name: userToUpdate.name,
      age: userToUpdate.age,
    });
    navigate("/");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <select onChange={(e) => getUserData(e)}>
        {users.map((user) => {
          return (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          );
        })}
      </select>

      <br />
      <br />

      {userToUpdate && (
        <div>
          Name:{" "}
          <input
            onChange={(e) =>
              setUserToUpdate({ ...userToUpdate, name: e.target.value })
            }
            value={userToUpdate.name}
            type="text"
          />{" "}
          <br />
          Age:{" "}
          <input
            onChange={(e) =>
              setUserToUpdate({ ...userToUpdate, age: +e.target.value })
            }
            value={userToUpdate.age}
            type="text"
          />{" "}
          <br />
          <button onClick={updateUser}>Update</button>
        </div>
      )}
    </div>
  );
}
