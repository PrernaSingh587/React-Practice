import React, { useState } from 'react';

const Form = (props) => {
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const onSb = (event) => {
        event.preventDefault();
        if (newName.length === 0 || newAge.length === 0) {
            alert("Enter valid");
            return;
        }
        props.AddtoList({
            name: newName,
            age: newAge
        });
        setNewAge('');
        setNewName('');
    }
    const nameHand = (event) => {
        setNewName(event.target.value);
    }
    const ageHand = (event) => {
        setNewAge(event.target.value);
    }

    return (
        <form onSubmit={onSb}>
            <h1>Enter Name </h1>
            <input type="text" value={newName} onChange={nameHand}></input>
            <h1>Enter Age</h1>
            <input type="number" value={newAge} onChange={ageHand}></input>
            <button type="submit">SUBMIT</button>
        </form>
    )
}
export default Form;