import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../services/api';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ border: "2px solid black", padding: "10px", borderRadius: "5px" }}>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post._id} style={{ border: "2px dotted black", padding: "20px", borderRadius: "20px", margin:"15px"}}>
          <h2 style={{ color: "red" }}>{post.title}</h2>
          <p>By {post.author}</p>
          <div>
            <Link to={`/posts/${post._id}`} style={{ color: "white" ,backgroundColor: "black", padding:"12px", margin:"10px", textDecoration:"none", borderRadius: "5px"}}>View</Link>
            <Link to={`/edit/${post._id}`} style={{ color: "white" ,backgroundColor: "black", padding:"12px", margin:"10px", textDecoration:"none", borderRadius: "5px"}}>Edit</Link>
            <button 
              onClick={() => handleDelete(post._id)} style={{ color: "white" ,backgroundColor: "black", padding:"12px", margin:"10px", textDecoration:"none", borderRadius: "5px"}}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}