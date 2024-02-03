// import logo from './logo.svg';
import './App.css';

import PostsCreate from './components/PostsCreate';
import PostsShow from './components/PostsShow';

function App() {
  return (
    <div className="container mt-2 mb-2">
      <PostsCreate />
      <PostsShow />
    </div>
  );
}

export default App;
