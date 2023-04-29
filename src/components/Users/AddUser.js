import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsernameState, setEnteredUsernameState] = useState('');
  const [enteredUserAgeState, setEnteredUserAgeState] = useState('');
  const [errorState, setErrorState] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsernameState.trim().length === 0 || enteredUserAgeState.trim().length === 0) {
      setErrorState({
        title: 'Invalid',
        message: 'do it better'
      });
      return;
    }
    if (+enteredUserAgeState < 1){
      setErrorState({
        title: 'Also invalid',
        message: 'fix it'
      })
      return;
    }
    props.onAddUser(enteredUsernameState, enteredUserAgeState);

    setEnteredUserAgeState('');
    setEnteredUsernameState('');
  };
  const userNameChangeHandler = (event) => {
    setEnteredUsernameState(event.target.value)
  }
  const userAgeChangeHandler = (event) => {
    setEnteredUserAgeState(event.target.value)
  }
  const errorHandler = () => {
    setErrorState(null)
  }

  return (
    <div>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onErrorHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsernameState} onChange={userNameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredUserAgeState} onChange={userAgeChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;