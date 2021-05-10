import React from 'react';
import Expenses from '../Expenses/Expenses';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    return <div className = "new-expense">
        <ExpenseForm/>
    </div>
}

export default NewExpense;