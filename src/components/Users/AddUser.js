import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsernameState, setEnteredUsernameState] = useState('');
  const [enteredUserAgeState, setEnteredUserAgeState] = useState('');
  const addUserHandler = (event) => {
    event.preventDefault();
    // The following are the validation conditionals. trim() removes all white space, and length checks the length. If either are equal to 0 then it returns nothing
    if(enteredUsernameState.trim().length === 0 || enteredUserAgeState.trim().length === 0) {
      return;
    }
    // The '+' in front is a javascript shorthand that checks to see if the variable is a number. Otherwise, it would check for string data
    if (+enteredUserAgeState < 1){
      return;
    }
    // This is pulling the onAddUser function via props from App.js
    props.onAddUser(enteredUsernameState, enteredUserAgeState);
    console.log('clicked')
    console.log(enteredUsernameState, enteredUserAgeState)
    // These next two lines were added as a way to clear the form. After this funciton is called, it returns the set state function to an empty string. It works in conjuction with the JSX below, where we set the value of the input to the set State function. 
    setEnteredUserAgeState('');
    setEnteredUsernameState('');
  };
  const userNameChangeHandler = (event) => {
    setEnteredUsernameState(event.target.value)
  }
  const userAgeChangeHandler = (event) => {
    setEnteredUserAgeState(event.target.value)
  }

  return (
    <div>
      <ErrorModal title="uh oh" message="blooh" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsernameState} onChange={userNameChangeHandler}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredUserAgeState} onChange={userAgeChangeHandler}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;