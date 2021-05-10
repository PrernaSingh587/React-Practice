import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm =() => {
  //const [enteredTitle,setEnteredTitle ] =useState('');
  //const [enteredDate,setEnteredate] = useState('');
 // const [enteredAmount,setEnteredAmount] = useState('');

 const [userInput,setUserInput]=useState({
     enteredTitle: '',
     enteredAmount: '',
     enteredDate: ''
 })


 const dateHandler = (event) => {
   // setUserInput({
  //      ...userInput,
    //    enteredDate: event.target.value
    //})
    setUserInput((prevState) => {
        return {...prevState , 
         enteredDate : event.target.value
     }
    })
  
    console.log(event.target.value);
}
  
 const amountHandler = (event) => {
   // setUserInput({
     //   ...userInput,
    //    enteredAmount: event.target.value
   // })
   setUserInput((prevState) => {
    return {...prevState , 
     enteredAmount : event.target.value
 }
})
    console.log(event.target.value);
}
    const titleHandler = (event) => {
         //setEnteredTitle(event.target.value);
        
        // setUserInput({
           //  ...userInput,
           //  enteredTitle: event.target.value
       //  })
       setUserInput((prevState) => {
           return {...prevState , 
            enteredTitle : event.target.value
        }
       })
        console.log(event.target.value);
    }
    return <form>
       <div className ="new-expense__controls">
           <div className ="new-expense__control">
               <label>Title</label>
               <input type="text" onChange={titleHandler}/>
           </div>
       </div>
       <div className ="new-expense__controls">
           <div className ="new-expense__control">
               <label>Amount</label>
               <input onChange={amountHandler} type="number" min="0.01" step="0.01"/>
           </div>
       </div>
       <div className ="new-expense__controls">
           <div className ="new-expense__control">
               <label>Date</label>
               <input onChange={dateHandler} type="date" min="2019-01-01" max="2022-12-31" />
           </div>
       </div>
       <div className ="new-expense__actions">
           <button type="submit">Add Expense</button>
       </div>
    </form>
}

export default ExpenseForm;