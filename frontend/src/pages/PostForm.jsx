import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, updatePost, getPost } from '../services/api';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await getPost(id);
      const post = response.data;
      setTitle(post.title);
      setContent(post.content);
      setAuthor(post.author);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content, author };

    try {
      if (isEditing) {
        await updatePost(id, postData);
      } else {
        await createPost(postData);
      }
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>
        {isEditing ? 'Edit Post' : 'Create New Post'}
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{marginBottom: "20px"}} 
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button
          type="submit" style={{ color: "white" ,backgroundColor: "black", padding:"12px", margin:"10px", textDecoration:"none", borderRadius: "5px"}}
        >
          {isEditing ? 'Update Post' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}