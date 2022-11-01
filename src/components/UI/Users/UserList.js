import Card from "../Card/Card";
import classes from "./UserList.module.css";

const UserList = ({users}) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map(({name,age,id}) => {
          return (
            <li key = {id}>
              {name} ({age}years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
