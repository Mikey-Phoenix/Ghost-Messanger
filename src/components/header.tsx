import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/home'
import SignIn from '../pages/signIn'
import SignUp from '../pages/signUp'
import Profile from '../pages/profilePage'
import Messages from '../pages/messages'

function header() {
    return (
        <BrowserRouter>
            <main>
                <Link to="/">Home</Link>
                <Link to="/signIn">Sign In</Link>
                <Link to="/signUp">Sign Up</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/messages">Messages</Link>
            </main>

            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            </Routes>
        </BrowserRouter>
    );
}

export default header;