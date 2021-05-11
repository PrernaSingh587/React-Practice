import React from 'react';
import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing,funcEdit] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.someFunc(expenseData);
        funcEdit(false)
        console.log(expenseData);
    
    }

    const startEdit = () => {
        funcEdit(true)
    }

    const stopEdit = () => {
        funcEdit(false)
    }
 
    return <div className = "new-expense">
       {!isEditing && <button onClick={startEdit}>Add New Expense</button>}
       {isEditing && <ExpenseForm stopEdit={stopEdit} onSaveExpenseData={saveExpenseDataHandler}/>}
        
    </div>
}

export default NewExpense;