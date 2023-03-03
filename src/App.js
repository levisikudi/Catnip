import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/auth' element={<AuthPage />}/>
         <Route path='/' element={<LandingPage />}/>
         <Route path='/*' element={<Navigate to='/' />}/>
      </Routes>
    </div>
  );
}

export default App;
