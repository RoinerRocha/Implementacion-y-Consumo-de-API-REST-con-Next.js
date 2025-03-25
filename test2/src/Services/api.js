export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    if (!res.ok) throw new Error("Error al obtener publicaciones");
    return res.json();
};

export const createPost = async (data) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al crear publicación");
    return res.json();
};

export const updatePost = async (id, data) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al actualizar publicación");
    return res.json();
};