import './App.css';
import { styled, render, ThemeProvider } from 'styled-components'
import { Button, Text, Desktop, Row, Login } from './styled-component/button'
import Link from './boginoo/desktop';
import LoginPage from './boginoo/login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import SignupPage from './boginoo/signup';
import Loading from './boginoo/loading';
import RestartPage from './boginoo/restart';
import React, { useState } from 'react'; 
import Button1 from '../src/boginoo/provider/button';
import { AuthProvider } from './boginoo/provider/context';
import LinkPage from './boginoo/desktop';
import Data from './boginoo/edit/app';
import Redirect from './boginoo/redirect';

function App() {
  const [wait, setWait] = useState(false)
  setInterval(() => {
    setWait(true)
  }, 1000)

  return <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' exact element={wait ?  <LinkPage /> : <Loading />} />
          <Route path='login' element={wait ? <LoginPage /> :  <Loading />} />
          <Route path='signup' element={wait ?  <SignupPage /> : <Loading />} />
          <Route path='restart' element={ wait ? <RestartPage /> : <Loading />} />
          <Route path='*' element={<Redirect />} />
        </Routes>
      </Router>
  </AuthProvider>
}

export default App;
