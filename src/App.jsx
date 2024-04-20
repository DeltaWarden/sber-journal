import './App.css'
// import * as React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import homePage from './components/pages/home/homePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={homePage}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
