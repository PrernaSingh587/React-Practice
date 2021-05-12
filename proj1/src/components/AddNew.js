import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const AddNew = (props) => {
    const [todo,add] = useState('');

    const onSB = (event) => {
        event.preventDefault();
        props.addtoDO({
            id: Math.random(),
            todo:todo
        });
        add('');
    }
   
    const onchanging = (event) => {
        add(event.target.value);
    }
  
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <form onSubmit={onSB}>
            <input type="text" value={todo} onChange={onchanging} placeholder="Enter"/>
            <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default AddNew;