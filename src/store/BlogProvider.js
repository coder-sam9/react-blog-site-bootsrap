import React, { useState, useEffect } from "react";
import BlogContext from "./blog-context";
import baseUrl from "../api/BaseUrl";

function BlogProvider(props) {
  const [blogs, setBlogs] = useState([]);
  const getBlog = async () => {
    try {
      const response = await fetch(`${baseUrl}/blogs`);
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const addBlog = async (newBlog) => {
    try {
      const response = await fetch(`${baseUrl}/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });
      if (!response.ok) throw new Error("Failed to add blog");
      const data = await response.json();
      setBlogs((prevBlogs) => [...prevBlogs, data]);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const editBlog = async (id, updatedBlog) => {
    try {
      const response = await fetch(`${baseUrl}/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBlog),
      });
      if (!response.ok) throw new Error("Failed to edit blog");
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog._id === id ? updatedBlog : blog))
      );
    } catch (error) {
      console.error("Error editing blog:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/blogs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete blog");
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  const initialState={
    blogs:blogs,
    addBlog:addBlog,
    editBlog:editBlog,
    deleteBlog:deleteBlog,
    getBlog:getBlog,
  }
  return (
    <BlogContext.Provider value={initialState}>
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
