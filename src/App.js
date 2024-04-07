import './App.css';
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AuthContext, FirebaseContext} from './store/FirebaseContext'

function App() {
  const {user,setUser} = useContext(AuthContext)//this is coming from context and will be passed to the pages 
  const {firebase} = useContext(FirebaseContext)//setUser can be changed or called from here itself 
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)//ivide user, ne setUser nna global contextileek move cyyum and 
    })
  },[user])
  return (
    <div className="App">
      <Post>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />// because react does partial matching by default
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Create" element={<Create/>}></Route>
          <Route path="/View" element={<View/>}></Route>
        </Routes>
      </BrowserRouter>
      </Post>
    </div>
  );  
}

export default App;
