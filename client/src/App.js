
import Comment from './pages/comment';
import Header from './components/Header.js'
import './App.css';
import Login from './pages/login'

// this is what appears on screen when you run npm start
function App() {
  return (
    <div className="App">
      <Header/>
      <Comment/>
    </div>
    )
  }
    export default App
