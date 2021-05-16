import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import {useEffect} from 'react';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [value,isValue] = useState('');

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('isLoggedIn');
    if(storedUserInfo === null) return;
    if(storedUserInfo.length > 0) setIsLoggedIn(true);
  }, []);
    
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy demo anyways
    isValue(email);
    localStorage.setItem('isLoggedIn',email); //keyValue pair
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value= {
      {
        isLoggedIn : isLoggedIn
      }
    }>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login  onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;
