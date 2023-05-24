import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ManagementForm from './pages/ManagementForm';
import Application from './pages/Application';
import CommunityForm from './pages/CommunityForm';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/management-form' element={<ManagementForm/>} />
      <Route path='/community-form' element={<CommunityForm/>} />
      <Route path='/application' element={<Application/>} />
    </Routes>
    </div>
  );
}

export default App;
