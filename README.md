# useState

This branch talks about the basics of useState hook. It's used in functional component of react.
To import it , write :
import {useState} from 'react';

--React does not rerender components after the first render unless they are triggered to do so. That means, if you change the variable in a component just by normal JS method and expect that to show up in it, that won't happen. 

Therefore, to make react know that we are trying to update some values in the component, we use state. 

In functional component, as already mentioned, we use useState hook.

An example syntax can be : 

##Method :1

const fn = () => {

    const [nameOfVariable, funcToSetTheVar] = useState(initialValue);

    //This 'intitalValue' is the value at the time of first rerender.

const goodFunc = () =>  {

    funcToSetVar('newValue');
     //Change the value and rerendner the component.
}

return (
    <div onClick={goodFunc}> 

    {nameOfVariable}
    
    </div>
);
  
}

