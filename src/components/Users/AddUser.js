import React , {useState} from 'react';
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
 const [enteredUsername, setEnteredUsername] = useState('');
 const [enteredAge, setEnteredAge] = useState('');
 const [error, setError] = useState();

 const addUserHandler = event => {
     event.preventDefault();
     if(enteredAge==='' || enteredUsername==='') { 
         setError({
             title: 'Invalid Input',
             message: 'Please Enter a Valid Name and Age'
         }); 
         return;}
     if(+enteredAge <1) {
         setError({
            title: 'Invalid Age',
            message: 'Please Enter a Valid Age'
        });
         return;}
     console.log(enteredAge,enteredUsername);
     props.addUserListing({name: enteredUsername, age: enteredAge});
     setEnteredUsername('');
     setEnteredAge('');
 }

 const errorHandler = () => {
     setError(null);
 }

 const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value)
 }

 const ageChangeHandler = event => {
    setEnteredAge(event.target.value)
 }

    return (<div>
        {error ? <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/> : null}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">
                Username
            </label>
            <input id="username" value={enteredUsername} type="text" onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age(Year)</label>
            <input id="age" value={enteredAge} type="number" onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser;