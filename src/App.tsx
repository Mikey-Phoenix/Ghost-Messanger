import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Profile from './pages/profilePage'
import Messages from './pages/messages'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        {/* <Header /> */}
      
        {/* <Footer /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
