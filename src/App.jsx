import './App.css'
// import * as React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import homePage from './components/pages/home/homePage'
import Header from "./components/base/header/header"
import NotFoundPage from './components/base/notfound/NotFoundPage';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={homePage}></Route>
        <Route path='*' Component={NotFoundPage}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
