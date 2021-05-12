import React from 'react';
import { useState } from 'react';
import AddNew from './components/AddNew';
import Enter from './components/Enter';
import Form from './components/Form';
import NewItem from './components/NewItem';

function App() {
  const [isEnter, setEnter] = useState(false);
  const [alist, setNewList] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todo, setTodo] = useState([]);
  const clk = () => {
    setEnter('true');
    console.log(isEnter);
  }
  const AddtoList = (obj) => {
    console.log(obj)
    setNewList(obj);
    setIsLoggedIn(true);
  }

  const rm = (ind) => {
    // setTodo(prev => {
    //   const updated = prev.filter((t, index) => index !== ind);
    //   return updated;
    // });
    setTodo(todo.filter((t, index) => index !== ind));
  }

  const addTodo = (obj) => {
    setTodo([obj, ...todo]);
  }

  return (<div>
    {!isEnter ? <Enter onClick={clk} /> : <Form AddtoList={AddtoList} />}
    {isLoggedIn ? <AddNew name={alist.name} age={alist.age} addTodo={addTodo} /> : null}
    <NewItem items={todo} rm={rm} />
  </div>)
}

export default App;
