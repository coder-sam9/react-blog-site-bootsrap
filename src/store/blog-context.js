import React from "react";

const BlogContext=React.createContext({
    blogs:[],
    addBlog:()=>{},
    editBlog:()=>{},
    deleteBlog:()=>{},
    getBlog:()=>{},
});
export default BlogContext;