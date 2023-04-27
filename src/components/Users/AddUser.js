import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsernameState, setEnteredUsernameState] = useState('');
  const [enteredUserAgeState, setEnteredUserAgeState] = useState('');
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log('clicked')
    console.log(enteredUsernameState, enteredUserAgeState)
  };
  const userNameChangeHandler = (event) => {
    setEnteredUsernameState(event.target.value)
  }
  const userAgeChangeHandler = (event) => {
    setEnteredUserAgeState(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={userAgeChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;