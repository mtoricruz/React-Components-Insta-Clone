//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";


const PostsPage = ({ posts }) => {
  
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        posts.map(post => {
          return <Post key={post} post = {post}/>
        })
      }
    </div>
  );
};

export default PostsPage;
