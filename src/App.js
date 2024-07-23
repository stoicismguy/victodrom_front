import './App.css';

import Main from './screens/Main/Main';
import Profile from './screens/Profile/Profile';


import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='main' element={<Main/>}/>
        <Route path='' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
