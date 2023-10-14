import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client from './UI/Client';
import Login from './UI/Login';
import Register from './UI/Register';
import Home from './UI/Home';
import Admin from './UI/Admin';
import Hr from './UI/Hr';
import AdminLogin from './UI/AdminLogin';
import Display from "./UI/Display"
import Contact from './UI/Contact';
import EmailSend from './UI/emailverification';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/home" element={<Home />}/>
        <Route path="/Client" element={<Client />} />
        <Route path="/Admin" element={<Admin/>}></Route>
        <Route path="/hr" element={<Hr/>}></Route>
        <Route path="/display" element={<Display/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/emailverification' element={<EmailSend/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}