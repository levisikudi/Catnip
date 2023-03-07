import { useContext } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { AppContext } from './context/userContexts';
import CatformPage from './pages/catformpage';
import CatProfile from './pages/CatProfile';
import Conversations from './pages/Conversations';
import Dashboard from './pages/Dashboard';
import EditPage from './pages/EditPage';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import SignUpPage from './pages/SignUp';

function App() {

  const {user} = useContext(AppContext)

  return (
    <div className="App">
      <Nav />
      {user?
        <Routes>
         <Route path='/signup' element={<SignUpPage />}/>
         <Route path='/catform' element={<CatformPage />}/>
         <Route path='/user/dash' element={<Dashboard />}/>
         <Route path='/user/edit' element={<EditPage />}/>
         <Route path='/user/profile' element={<Profile />}/>
         <Route path='/cats/profile' element={<CatProfile />}/>
         <Route path='/chat' element={<Conversations />}/>
         <Route path='/' element={<LandingPage />}/>
         <Route path='/*' element={<Navigate to='/' />}/>
      </Routes>
        :
      <Routes>
         <Route path='/signup' element={<SignUpPage />}/>
         <Route path='/catform' element={<CatformPage />}/>
         <Route path='/' element={<LandingPage />}/>
         <Route path='/*' element={<Navigate to='/' />}/>
      </Routes>
      }
    </div>
  );
}

export default App;
