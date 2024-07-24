import './App.css';

import Main from './screens/Main/Main';
import Profile from './screens/Profile/Profile';


import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Main/>}/>
        <Route path='profile'>
          <Route path='' element={<Navigate to="me"/>}/>
          <Route path='me' element={<Profile/>}/>
        </Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
