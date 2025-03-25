"use client";
import { useState } from "react";

export default function PostForm({ onPostSuccess }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, body }),
            });

            if (!res.ok) throw new Error("Error al crear publicación");

            setTitle("");
            setBody("");
            setMessage("✅ Publicación creada con éxito");
            onPostSuccess();
        } catch (err) {
            setMessage(`❌ ${err.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Crear nueva publicación</h2>
            <input
                className="block w-full p-2 border rounded mb-2"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                className="block w-full p-2 border rounded mb-2"
                placeholder="Contenido"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" type="submit">
                Publicar
            </button>
            {message && <p className="mt-2">{message}</p>}
        </form>
    );
}
