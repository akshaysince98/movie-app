import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import New from './components/New'
import PageNotFound from './components/PageNotFound'
import { Routes, Route, Navigate } from 'react-router-dom'; // npm i react-router-dom
// import Main from './components/Main'
import Navbar from './components/Navbar'
// import Routing from './Routing' //routing example

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/new' element={<New />} />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
        </>
        // <Routing />
    )
}

export default App
