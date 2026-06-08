import { useState } from "react";

function ObjectState() {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={handleChange}
      />

      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
    </div>
  );
}

export default ObjectState;
