import './ExpenseItem.css';
import Expn from './Expn.js'

function ExpenseItem(props) {
     
    return (
        <div className="expense-item">
            <Expn title={props.title} date= {props.date.toISOString()} amt={props.amt} />
        </div>
    )
}

export default ExpenseItem;