import React, { useState }from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersListState, setUsersListState] = useState([])
  const addUserHandler = (userName, userAge) => {
    setUsersListState((previousUsersList)=> {
      return [
        ...previousUsersList, 
        { name: userName, age: userAge, id: Math.random().toString() }, 
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList usersList={usersListState} />
    </div>
  );
}

export default App;
