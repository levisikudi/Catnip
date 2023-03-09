import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import ContextProvider from './context/authContexts';
import ChatContextProvider from './context/chatContext';
import CatContextProvider from './context/catContext';
import ProfileContextProvider from './context/profileContext';
import UserContextProvider from './context/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileContextProvider>
      <UserContextProvider>  
        <CatContextProvider>
          <ContextProvider>
            <Router>
              <App />
            </Router>
          </ContextProvider>
        </CatContextProvider>
      </UserContextProvider>
    </ProfileContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
