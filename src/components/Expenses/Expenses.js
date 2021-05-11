import React from 'react';
import Card from '../UI/Card.js';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart.js';
const Expenses = (props) => {
  const [year,yearFunc] = useState('2020');
  const pickedValue = (val) => {
    yearFunc(val);
    console.log(val);
  }

  const filteredItems = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===year;
  })


    return (
      <div>
        <Card className ="expenses">
        <h1>{year}</h1>
        <ExpensesFilter selected={year} pickedValue={pickedValue}/>
        <ExpensesChart expenses={filteredItems}/>
          <ExpensesList items={filteredItems}/>
        </Card>
      </div>
        
    )
}

export default Expenses;