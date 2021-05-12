import React, { useState } from 'react';

const AddNew = (props) => {
    const [todo, setTodo] = useState('');

    const onSB = (event) => {
        event.preventDefault();
        props.addTodo({
            id: Math.random(),
            todo: todo
        });
        setTodo('');
    }

    const onchanging = (event) => {
        setTodo(event.target.value);
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <form onSubmit={onSB}>
                <input type="text" value={todo} onChange={onchanging} placeholder="Enter" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddNew;