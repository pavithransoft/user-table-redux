import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", error: error.message });
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );
    dispatch({
      type: "ADD_USER",
      payload: { ...response.data, id: user.id + 1 },
    });
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const updateUser = (user) => async (dispatch) => {
  try {
    await axios.put(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      user
    );
    dispatch({ type: "UPDATE_USER", payload: user });
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    dispatch({ type: "DELETE_USER", payload: userId });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
