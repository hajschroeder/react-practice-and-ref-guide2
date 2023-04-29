import React, { useState }from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  // The following lines are how we are handling the state of a new user. 
  const [usersListState, setUsersListState] = useState([])
  const addUserHandler = (userName, userAge) => {
    setUsersListState((previousUsersList)=> {
      return [
        // the spread operation (...variableName) is a javascript shorthand. It pulls all previous data from the list and includes it in the updated array. 
        ...previousUsersList, 
        // objects with key-value pairs
        { name: userName, age: userAge, id: Math.random().toString() }, 
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {/* The users element below is being pulled into the AddUser component via props */}
      <UsersList usersList={usersListState} />
    </div>
  );
}

export default App;
