import classes from './UsersList.module.css';
import React from 'react';
import Card from '../UI/Card';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {/* We're using props to pass the information between components */}
        {/* The props is what is giving us our array of users as data */}
        {/* map() is transforming our list of users into JSX elements to appear in the DOM. It executes a function as every item in the array */}
        {/* usersList is now returning an array where every element has a name and an age property */}

        {props.usersList.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList;