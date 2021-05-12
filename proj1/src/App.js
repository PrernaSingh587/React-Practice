import React from 'react';
import { useState } from 'react';
import AddNew from './components/AddNew';
import Enter from './components/Enter';
import Form from './components/Form';
import NewItem from './components/NewItem';

function App() {
  const [isEnter,setEnter] = useState(false);
  const [alist,setNewList] = useState('');
  const [isen,setisen] = useState(false);
  const [todo,addtodo] = useState([]);
  const clk=()=>{
    setEnter('true');
    console.log(isEnter);
  }
  const AddtoList = (obj) => {
    console.log(obj)
    setNewList(obj);
    setisen(true);
  }
  
  const rm = (ind) => {
   addtodo(prev => {
     const updated = prev.filter((t,index) => index!==ind);
     return updated;
   })
  }

  const addtoDO = (obj) => {
    addtodo([obj,...todo]);
  }

  return(<div>
   {!isEnter ? <Enter onClick={clk}/> : <Form AddtoList={AddtoList}/>}
   {isen ? <AddNew name={alist.name} age={alist.age} addtoDO={addtoDO}/> : null}
   <NewItem items={todo} rm={rm}/>
  </div>)
}

export default App;
