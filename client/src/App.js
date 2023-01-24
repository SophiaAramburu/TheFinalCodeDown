import Comment from './pages/comment';
import Header from './components/Header.js'
import Home from './pages/homepage'
import Login from './pages/login'
import Signup from './pages/create-account'

import './App.css';
import { Route, Routes } from "react-router-dom"

// this is what appears on screen when you run npm start
function App() {
  return (

    <>

    <Header />

    <Routes> 
      <Route path="/" element= { <Home />} />
      <Route path="/pages/comment" element= { <Comment />} />
      <Route path="/pages/create-account" element= { <Signup />} />
      <Route path="/pages/login" element= { <Login /> } />
      <Route path="/pages/comment" element= { <Comment /> } />
    </Routes>

  </>
    

    )}

    export default App;
