import React from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Expenses from '../Expenses/Expenses';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.someFunc(expenseData);
        console.log(expenseData);
    
    }


    return <div className = "new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;