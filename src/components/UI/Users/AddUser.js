import { useState } from "react";
import Button from "../Button";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = ({onAddUser}) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError]=useState(null);

 
  const addUserHandler = (e) => {
    e.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) { //proverkadan otpoy kalsa,dalshe ishtebeyt
        setError({
            title:"Invalid Input",
            message:"Not Input Found"
        })
        return 
    }
    if(+enteredAge < 1) {
        setError ({
            title:"Invalid Age",
            message:"Please enter a valid age> 0"
        })
        return
    }
    console.log(enteredUsername);
    console.log(enteredAge);
    setEnteredAge("")
    setEnteredUsername("")
   onAddUser(enteredUsername,enteredAge)
  };
 const userNameChangeHandler = (e) => {
    setEnteredUsername(e.target.value)
 }

 const userAgeChangeHandler = (e) =>{
    setEnteredAge(e.target.value)
 }

const errorModalCloser = () => {
    setError(null)

}
  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onClose={errorModalCloser}  />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input value={enteredUsername} onChange ={userNameChangeHandler} id="username" type="text" />
          <label htmlFor="age">Age</label>
          <input value={enteredAge} onChange={userAgeChangeHandler} type="number" />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
