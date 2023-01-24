
import './App.css';
import { Route, Routes } from "react-router-dom"


// import the 4 files inside the pages directory
import { createAccount } from './pages/create-account';
import { Home } from './pages/homepage';
import { Login } from './pages/login'
import { Comment } from './pages/comment';

// this is what appears on screen when you run npm start
function App() {
  return (

    <>
    
    <nav>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/pages/comment">Comment</Link></li>
        <li><Link to="/pages/create-account">Create-Account</Link></li>
        <li><Link to="/pages/login">Login</Link></li>
      </ul>
    </nav>
    
    <Routes>
      <Route path="/" element= { <Home />} />
      <Route path="/pages/create-account" element= { <createAccount />} />
      <Route path="/pages/login" element= { <Login /> } />
      <Route path="/pages/comment" element= { <Comment /> } />
    </Routes>
    
    </>
    

    )};

export default App;





/* import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state }
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              {/* Define routes to render different page components at different paths }
              <Route 
                path="/" 
                element={<Home />} 
              />
              {/* Define a route that will take in variable data }
              <Route 
                path="/profiles/:profileId" 
                element={<Profile />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App; */
