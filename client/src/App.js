import Navbar from "./pages/Components/navbar";
// import Comment from "./pages/comment";

import "./App.css";
import PostList from "./pages/Components/PostList";

// this is what appears on screen when you run npm start
function App() {
  return (
    <div className="App">
      <Navbar />
      <PostList />
    </div>
  );
}
export default App;
