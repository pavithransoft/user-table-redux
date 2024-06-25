import "./App.css";
import AddUserForm from "./components/Form/AddUserForm";
import UserTable from "./components/Table/UserTable";

function App() {
  return (
    <div className="App">
      <h1>User Table</h1>
      <AddUserForm />
      <UserTable />
    </div>
  );
}

export default App;
