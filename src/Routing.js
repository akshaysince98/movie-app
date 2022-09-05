import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';


function Home() {
    return (
        <div>Home</div>
    )
}
function Login() {
    return (
        <div>Login</div>
    )
}
function PageNotFound() {
    return (
        <div>PageNotFound</div>
    )
}

function Routing() {
    return (

        <>
            <h2>Routing Example</h2>
            <div>
                <button className='bg-blue-300 mr-4'>Home</button>
                <button className='bg-blue-300'>Login</button>
            </div>
            <Routes>
                <Route path='/' element={<Navigate replace to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/home/login' element={<Login />} />
            </Routes>



        </>

    )
}

export default Routing