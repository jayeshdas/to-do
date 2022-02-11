import './App.css';
import { Routes, Route } from 'react-router';
import ResponsiveAppBar from './components/TODO/MUINavBar';
import ToDoMain  from './components/TODO/ToDoMain';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />

      <Routes>
        <Route path='/' element={<ToDoMain />}></Route>
      </Routes>
    </div>
  );
}

export default App;
