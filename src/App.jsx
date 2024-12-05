import React from 'react';

import Exp from './Expense/Exp';
import { Route, Routes , Navigate} from 'react-router-dom';
import SignUp from './Expense/Login/SignUp';
import Login from './Expense/Login/Login';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/exp' element={<Exp/>}/>
      <Route path="/" element={<Navigate to='/exp'/>} />
    </Routes>
    </>
  );
};

export default App;