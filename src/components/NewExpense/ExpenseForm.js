import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm =(props) => {
  const [enteredTitle,setEnteredTitle ] =useState('');
const [enteredDate,setEnteredate] = useState('');
 const [enteredAmount,setEnteredAmount] = useState('');

 /*const [userInput,setUserInput]=useState({
     enteredTitle: '',
     enteredAmount: '',
     enteredDate: ''
 }) */


 const dateHandler = (event) => {
    setEnteredate(event.target.value);    

   // setUserInput({
  //      ...userInput,
    //    enteredDate: event.target.value
    //})
  
  /*  setUserInput((prevState) => {
        return {...prevState , 
         enteredDate : event.target.value
     }
    })*/
  
    console.log(event.target.value);
}
  
 const amountHandler = (event) => {
    setEnteredAmount(event.target.value);

   // setUserInput({
     //   ...userInput,
    //    enteredAmount: event.target.value
   // })
  
  /* setUserInput((prevState) => {
    return {...prevState , 
     enteredAmount : event.target.value
 } 
})*/
    console.log(event.target.value);
}
    const titleHandler = (event) => {
         setEnteredTitle(event.target.value);
        
        // setUserInput({
           //  ...userInput,
           //  enteredTitle: event.target.value
       //  })
      
      /* setUserInput((prevState) => {
           return {...prevState , 
            enteredTitle : event.target.value
        }
       })*/
        console.log(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); //prevents default submission behaviour of form
        //which causes to reload the page
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredate('');

        props.onSaveExpenseData(expenseData);

           
    }
    
    return <form onSubmit ={submitHandler}>
       <div className ="new-expense__controls">
           <div className ="new-expense__control">
               <label>Title</label>
               <input type="text" value={enteredTitle} onChange={titleHandler}/>
           </div>
       </div>
       <div className ="new-expense__controls">
           <div className ="new-expense__control">
               <label>Amount</label>
               <input value={enteredAmount} onChange={amountHandler} type="number" min="0.01" step="0.01"/>
           </div>
       </div>
       <div className ="new-expense__controls">
           <div className ="new-expense__control">
               <label>Date</label>
               <input value={enteredDate} onChange={dateHandler} type="date" min="2019-01-01" max="2022-12-31" />
           </div>
       </div>
       <div className ="new-expense__actions">
           <button type="submit">Add Expense</button>
       </div>
    </form>
}

export default ExpenseForm;