import React from 'react'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js';
import MyPage from './pages/MyPage.js';

import Layout from './components/layout/Layout.js';


const App = () => {

  return (
    <BrowserRouter>

      <Layout>
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/myPage" element={<MyPage />}></Route>
      </Routes>
      </Layout>

    </BrowserRouter>
  )
}

export default App