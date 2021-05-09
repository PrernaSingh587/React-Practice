import './ExpenseItem.css';

function Expn(props) {
    return (
       <div>
           <div>{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amt}
                </div>
            </div>
       </div>
    );
}
export default Expn;