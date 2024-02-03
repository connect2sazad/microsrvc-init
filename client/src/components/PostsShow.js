import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentsCreate from "./CommentsCreate";
import CommentsShow from "./CommentsShow";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.js';

function PostsShow() {

    const [posts, setPosts] = useState({});

    const getPosts = async () => {
        const res = await axios.get('http://127.0.0.1:4000/posts/');
        setPosts(res.data);
    }

    useEffect(() => {

        getPosts();

    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card bg-secondary m-2 p-2 text-white" style={{width: '30%'}} key={post.id}>
                <h3>{post.title}</h3>
                <CommentsShow postId={post.id}/>
                <CommentsCreate postId={post.id}/>
            </div>
        );
    })

    return (
        <div className="d-flex flex-wrap flex-row justify-content-between mt-2">
            {renderedPosts}
        </div>
    );
}

export default PostsShow;