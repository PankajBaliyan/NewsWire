import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import NewNews from './Components/NewNews'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/new" element={<NewNews/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute