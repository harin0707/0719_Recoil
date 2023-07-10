import React from 'react'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main.js';
import Student from './pages/Student.js';
import Result from './pages/Result.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/student/:" element={<Student />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App