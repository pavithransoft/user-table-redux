// src/AddUserForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/usersActions";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, username };
    dispatch(addUser(newUser));
    setName("");
    setEmail("");
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
