import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateUserComp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const sendUser = async () => {
    await axios.post("http://localhost:5000/persons", user);
    navigate("/");
  };

  return (
    <div>
      Name:{" "}
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
      />
      Age:{" "}
      <input
        onChange={(e) => setUser({ ...user, age: +e.target.value })}
        type="text"
      />
      <button onClick={sendUser}>Create User</button>
    </div>
  );
}
