import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Application from './pages/Application';
import CommunityForm from './pages/CommunityForm';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/management-form' element={<Application/>} />
      <Route path='/community-form' element={<CommunityForm/>} />
    </Routes>
    </div>
  );
}

export default App;
