import Expense from './components/ExpenseItem.js'
function App() {
  const expenseDate = new Date(2021,2,28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
  return (
    <div className="App">
      <Expense amt={expenseAmount} date={expenseDate} title={expenseTitle}/>
      <Expense amt={expenseAmount} date={expenseDate} title={expenseTitle}/>
      <Expense amt={expenseAmount} date={expenseDate} title={expenseTitle}/>
    </div>
  );
}

export default App;
