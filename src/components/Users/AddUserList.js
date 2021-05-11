import React from 'react';
import classes from './AddUserList.module.css';

const AddUserList = (props) => {
   console.log(props.userList)
    return(
        <div className={classes.users}>
            {props.userList.map(ele => {
                    return (
                    <li>{ele.name} my age {ele.age}</li>)
                })
            }
            
        </div>
    )
}

export default AddUserList;