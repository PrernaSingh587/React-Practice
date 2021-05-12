import React from 'react';

const NewItem = (props) => {
    const removehand = (ind) => {
        console.log("hiii")
        props.rm(ind);
    }
    console.log(props.items.length)
    return (
        <div>
            {props.items.map((ele, ind) => {
                return (
                    <>
                        <h1
                            onClick={() => removehand(ind)}>
                            {ele.todo}
                        </h1>
                    </>
                )
            })}
        </div>
    )

}

export default NewItem;