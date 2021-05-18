import React from 'react';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1> React Meal </h1>
           <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        
        <div>
            <img src={mealsImage} />
        </div>
    </React.Fragment>

}

export default Header;