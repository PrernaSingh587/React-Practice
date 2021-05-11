import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import AddUserList from './components/Users/AddUserList';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserListing = (obj) => {
  
     setUserList([obj,...userList]);
  }
  return (
    <div>
      <AddUser addUserListing={addUserListing}/>
      <AddUserList userList={userList}/>
    </div>
  );
}

export default App;
