import './App.css';

import Main from './screens/Main/Main';
import Profile from './screens/Profile/Profile';
import MyQuiz from './screens/MyQuiz/MyQuiz';


import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Main/>}/>
        <Route path='profile'>
          <Route path='' element={<Navigate to="me"/>}/>
          <Route path='me' element={<Profile/>}/>
          <Route path='my-quizzes' element={<MyQuiz/>}/>
        </Route>    
        <Route path='quiz'>
          <Route path='' element={<Navigate to="create"/>}/>
          <Route path=':id' element={<Navigate to="me"/>}/>
        </Route>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
