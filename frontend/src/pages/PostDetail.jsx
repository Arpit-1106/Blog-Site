import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../services/api';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await getPost(id);
      setPost(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>By {post.author}</p>
      <p>{post.content}</p>
      <Link to={`/edit/${post._id}`} style={{ color: "white" ,backgroundColor: "black", padding:"12px", margin:"10px", textDecoration:"none", borderRadius: "5px"}}>Edit</Link>
      <Link to="/" style={{ color: "white" ,backgroundColor: "black", padding:"12px", margin:"10px", textDecoration:"none", borderRadius: "5px"}}>Back to Posts</Link>
    </div>
  );
}