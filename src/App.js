import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Upban from './banners/Upban';
import Botban from './banners/Botban';
import Home from './home/Home';
import User from './user/User';
import Login from './user/Login';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [user, setUser] = useState({});
  return (
    <div className="App">
      
      <Upban currentPage={currentPage} setCurrentPage={setCurrentPage}/>

  
        <div className='componentcontainer'>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user" element={<User user={user} setUser={setUser}/>} />
          <Route path="/login" element={<Login setUser={setUser}/>}/>

        </Routes>
      
        </div>
        
      
      <Botban setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
