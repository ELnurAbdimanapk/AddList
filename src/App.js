import { useState } from "react";
import "./App.css";
import AddUser from "./components/UI/Users/AddUser";
import UserList from "./components/UI/Users/UserList";

function App() {
  const [userList, setUserList] = useState([{ name: "Elnura", age: 30 }]);
  console.log(userList);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevState) => {
      return [...prevState, { name: uName, age: uAge,id:Math.random().toString()}];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser = {addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
