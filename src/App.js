import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import CatProfile from './pages/CatProfile';
import Conversations from './pages/Conversations';
import Dashboard from './pages/Dashboard';
import EditPage from './pages/EditPage';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
         <Route path='/signup' element={<SignUpPage />}/>
         <Route path='/user/dash' element={<Dashboard />}/>
         <Route path='/user/edit' element={<EditPage />}/>
         <Route path='/cat/profile' element={<Profile />}/>
         <Route path='/cat/friend' element={<CatProfile />}/>
         <Route path='/chat' element={<Conversations />}/>
         <Route path='/' element={<LandingPage />}/>
         <Route path='/*' element={<Navigate to='/' />}/>
      </Routes>
    </div>
  );
}

export default App;
