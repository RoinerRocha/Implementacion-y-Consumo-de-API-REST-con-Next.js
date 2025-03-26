"use client";
import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import EditForm from "../components/EditForm";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      if (!res.ok) throw new Error("Error al obtener publicaciones");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleEditSuccess = () => {
    setEditingPost(null);
  };

  const updatePostLocal = (updatedPost) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Publicaciones</h1>

      {error && <p className="text-red-500">{error}</p>}

      <PostForm onPostSuccess={(newPost) => setPosts(prev => [newPost, ...prev])} />

      {editingPost && (
        <EditForm
          post={editingPost}
          onEditSuccess={handleEditSuccess}
          onEditLocal={updatePostLocal}
          onCancel={() => setEditingPost(null)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
            <button
              onClick={() => handleEdit(post)}
              className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
