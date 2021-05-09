import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card '+ props.ClassName;
    return (
        <div className={classes}> 
        {props.children}   
        </div>
    )
}

export default Card;