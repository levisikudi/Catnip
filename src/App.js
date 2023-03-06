import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
         <Route path='/signup' element={<SignUpPage />}/>
         <Route path='/user/dash' element={<Dashboard />}/>
         <Route path='/' element={<LandingPage />}/>
         <Route path='/*' element={<Navigate to='/' />}/>
      </Routes>
    </div>
  );
}

export default App;
