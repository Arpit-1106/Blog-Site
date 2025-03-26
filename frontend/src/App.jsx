import './App.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';

function App() {
  return (
    <div>
      <nav style={{marginBottom: "20px"}}>
        <Link to="/"style={{ color: "white" ,backgroundColor: "black", padding:"12px", margin:"10px", textDecoration:"none", borderRadius: "5px"}}>Home</Link>
        <Link to="/create"style={{ color: "white" ,backgroundColor: "black", padding:"12px", margin:"10px", textDecoration:"none", borderRadius: "5px"}}>New Post</Link>
      </nav>
      <Outlet />
      
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
      </Routes>
    </div>
  );
}

export default App;