import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    
/*let expensesContent = <h1>No Such Items</h1> 
if(props.items.length > 0) {
  expensesContent = props.items.map(expense => {
    return <ExpenseItem 
      id={expense.id}
      title={expense.title}
     amount={expense.amount}
  date={expense.date} />
})}
return expensesContent; */

if(props.items.length===0) {
    return <h1 className='expenses-list__fallback'>No Such Items</h1>
}
return (
    <ul className='expenses-list'>
        {props.items.map(expense => {
    return <ExpenseItem 
      id={expense.id}
      title={expense.title}
     amount={expense.amount}
  date={expense.date} />
})}
    </ul>

)

}

export default ExpensesList;