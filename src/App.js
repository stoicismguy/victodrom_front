import './App.css';

import Main from './screens/Main/Main';
import Profile from './screens/Profile/Profile';
import MyQuiz from './screens/MyQuiz/MyQuiz';
import SolvedQuiz from './screens/SolvedQuiz/SolvedQuiz';
import CreateQuiz from './screens/CreateQuiz/CreateQuiz';
import QuizDetails from './screens/QuizDetails/QuizDetails';


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
          <Route path='solved-quizzes' element={<SolvedQuiz/>}/>
        </Route>    
        <Route path='quiz'>
          <Route path='' element={<Navigate to="create"/>}/>
          <Route path='create' element={<CreateQuiz/>}/>
          <Route path=':id' element={<QuizDetails/>}/>
        </Route>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
