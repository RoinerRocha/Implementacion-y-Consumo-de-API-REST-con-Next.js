"use client";
import { useState } from "react";
import { updatePost } from "../Services/api";

export default function EditForm({ post, onEditSuccess, onEditLocal, onCancel }) {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [error, setError] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await updatePost(post.id, { title, body });
            onEditLocal({ ...post, title, body });
            alert("✅ Publicación editada con éxito");
            onEditSuccess();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleUpdate} className="p-4 border rounded bg-gray-100 mt-4">
            <h2 className="text-xl font-semibold">Editar publicación</h2>
            <input className="block w-full p-2 border rounded mb-2" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="block w-full p-2 border rounded mb-2" value={body} onChange={(e) => setBody(e.target.value)} />
            <div className="flex gap-2">
                <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700" type="submit">Guardar</button>
                <button onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Cancelar</button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    );
}
