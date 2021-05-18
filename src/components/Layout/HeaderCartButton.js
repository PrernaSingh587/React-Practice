import React, { useContext,useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
    const ctx = useContext(CartContext);
    const numberofCartItems = ctx.items.reduce((curNumber, item) => {
            return curNumber + item.amount;
    },0)
     const { items } = ctx;

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;

    useEffect(() => {
        if(items.length === 0 ) {
            return;
        }
        setBtnIsHighLighted(true);
      const timer=  setTimeout(() => {
            setBtnIsHighLighted(false);
        },300)
        return () => {
            clearTimeout(timer)
        }
    },[items])


    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
        <CartIcon/>
        </span>
        <span  > 
            Your cart
        </span>
        <span className={classes.badge}>{numberofCartItems}</span>
    </button>

}

export default HeaderCartButton;
