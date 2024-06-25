// src/EditUserForm.js
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/usersActions";

const EditUserForm = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email, username };
    dispatch(updateUser(updatedUser));
    onClose();
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
      <button type="submit">Update User</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

EditUserForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditUserForm;
