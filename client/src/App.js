import Comment from './pages/comment';
import Header from './components/Header.js'
import Home from './pages/homepage'
import Login from './pages/login'
import Signup from './pages/create-account'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import { Route, Routes } from "react-router-dom"

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// this is what appears on screen when you run npm start
function App() {
  return (
    <ApolloProvider client={client}>
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
  </ApolloProvider>



    )}

    export default App;
