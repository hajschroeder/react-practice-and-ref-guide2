import React, { useState }from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  // The following lines are how we are handling the state of a new user. 
  const [usersListState, setUsersListState] = useState([])
  const addUserHandler = (userName, userAge) => {
    setUsersListState((previousUsersList)=> {
      return [...previousUsersList, {name: userName, age: userAge, id: Math.random().toString() }]
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={[usersListState]} />
    </div>
  );
}

export default App;
