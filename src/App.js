import { useContext, useEffect } from 'react';
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { AppContext } from './context/userContexts';
import CatformPage from './pages/catformpage';
import CatProfile from './pages/CatProfile';
import Conversations from './pages/Conversations';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import SignUpPage from './pages/SignUp';
import { getUserfromSession, loginUser } from './utilities/userUtilities'

function App() {

  const {user, setUser} = useContext(AppContext)

  let nav = useNavigate()

   useEffect(() => {
      let autoLogin = async () => {
        await loginUser({email: "victorhamilton@gmail.com", password: "victorkimondo"});
        // get session info (user)
        let user = await getUserfromSession()
        setUser(user);
        nav('/user/dash')

      }
      autoLogin()

      
    }, [])

    // useEffect(() => {
    //   let checkSession = async () => {
       
    //     // get session info (user)
    //     let user = await getUserfromSession()
    //     setUser(user);
    //     nav('/user/dash')

    //   }
    //   checkSession()

      
    // }, [])


  

  return (
    <div className="App">
      <Nav />
      {user?
        <Routes>
         <Route path='/signup' element={<SignUpPage />}/>
         <Route path='/catform' element={<CatformPage />}/>
         <Route path='/user/dash' element={<Dashboard />}/>
         <Route path='/user/profile' element={<Profile />}/>
         <Route path='/cat/profile' element={<CatProfile />}/>
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
