import React from 'react'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js';

import {ThemeContext} from './context/context.js';
import { theme } from './theme/theme.js';


const App = () => {

  return (
    <BrowserRouter>

    <ThemeContext.Provider value={theme}>
      <Routes>
            <Route path="/" element={<Home />}></Route>
      </Routes>

    </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App