import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router';
import ToDoMain  from './components/ToDo/ToDoMain';
import ResponsiveAppBar from './components/ToDo/MUINavBar';
import Test from './components/ToDo/test';

function App() {
  return (
    <div className="App">
      {/* <h1>hellooooo</h1> */}
      <ResponsiveAppBar />

      <Routes>
        <Route path='/' element={<ToDoMain />}></Route>
        <Route path='/test' element={<Test />}></Route>

      </Routes>
    </div>
  );
}

export default App;
